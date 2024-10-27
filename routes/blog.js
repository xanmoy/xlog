const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');

const router = express.Router();

router.get('/', (req, res) => {
    // Pass the first two blogs to the home view
    const latestBlogs = blogs.blogs.slice(0, 2); // Get the first two blogs
    res.render('home', { blogs: latestBlogs });
});

router.get('/blog', (req, res) => {
    res.render('blogHome', {
        blogs: blogs.blogs
    });
});

router.get('/blogpost/:slug', (req, res) => {
    const myBlog = blogs.blogs.find((e) => e.slug === req.params.slug);
    console.log(myBlog);
    res.render('blogPage', {
        title: myBlog.title,
        content: myBlog.content
    });
});

module.exports = router;

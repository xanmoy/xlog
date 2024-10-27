const express = require('express');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const path = require('path');

// Set up Handlebars as the view engine
const hbs = engine({
    helpers: {
        // Custom Handlebars helper to truncate text
        truncateContent: (text, length) => {
            if (text.length > length) {
                return text.substring(0, length) + '...';
            }
            return text;
        }
    }
});

app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');
app.set('views', './views');

// Serve static files
app.use(express.static(path.join(__dirname, "static")));

// Set up routes
app.use("/", require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`);
});

const express = require('express');
const app = express();
const ejs = require('ejs');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the index page
app.get('/', (req, res) => {
   const data = {
      title: 'My Blog',
      posts: [
         { title: 'Post 1', body: 'This is the first post.' },
         { title: 'Post 2', body: 'This is the second post.' },
         { title: 'Post 3', body: 'This is the third post.' }
      ]
   };
   res.render('index', data);
});

// Start the server
app.listen(3000, () => {
   console.log('Server started on port 3000');
});

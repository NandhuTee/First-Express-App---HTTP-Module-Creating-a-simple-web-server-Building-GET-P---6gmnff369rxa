const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // TODO: Implement handling of the root endpoint '/'
  // Replace this comment with your code to send "Hello World!"
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  // TODO: Implement handling of the '/about' endpoint
  // Replace this comment with your code to send "Welcome to about page"
  res.send('welcome to about page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the Express app for testing purposes
module.exports = app;

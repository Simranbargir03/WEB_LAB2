const express = require('express');
const app = express();

// Route for GET request on the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route for POST request on the root route
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// Route for PUT request to the /user route
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// Route for DELETE request to the /user route
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

// Route with route parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});

// Route with regular expressions in route parameters
app.get('/user/:userId(\\d+)', (req, res) => {
  res.send(req.params);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

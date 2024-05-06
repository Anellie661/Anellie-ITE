const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8100; // Use environment variable for port or default to 3000

// Dummy data for demonstration purposes
let items = [];

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files from the 'dist' directory (assuming your Vue app is built)
app.use(express.static(path.join(__dirname, 'dist')));

// Route handler for handling GET requests to retrieve all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Route handler for handling POST requests to create a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Route handler for handling PUT requests to update an existing item
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  const index = items.findIndex(item => item.id === itemId);
  if (index !== -1) {
    items[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

// Route handler for handling DELETE requests to delete an existing item
app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  items = items.filter(item => item.id !== itemId);
  res.sendStatus(204);
});

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Serve the Vue app for any other routes (assuming your Vue app is built)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

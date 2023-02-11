const express = require('express');
const app = express();
const port = 3000;

// An array to store our to-do items
let todos = [];

// Middleware to parse JSON request bodies
app.use(express.json());

// Get all to-do items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Create a new to-do item
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json(todo);
});

// Update a to-do item
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = req.body;
  todos[id] = todo;
  res.json(todo);
});

// Delete a to-do item
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos[id];
  todos = todos.filter((_, i) => i !== id);
  res.json(todo);
});

  
  app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
  });
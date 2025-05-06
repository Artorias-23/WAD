const express = require('express');
const app = express();
app.use(express.json());

let tasks = [{ id: 1, name: 'Learn JavaScript' }, { id: 2, name: 'Practice Coding' }];

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
  res.status(200).json({ message: 'Task deleted' });
});
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(task => task.id === parseInt(req.params.id));
  if (task) {
    task.name = req.body.name;
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

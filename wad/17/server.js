const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/employees', (req, res) => {
  fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading employee file.');
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

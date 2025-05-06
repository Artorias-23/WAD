const express = require('express');
const app = express();
const PORT = 3000;

// Serve all files inside /public folder as static
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


//make images folder inside public folder and paste images over there
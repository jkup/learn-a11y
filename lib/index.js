const express = require('express');
const app = express();

// Static assets go in public folder
app.use(express.static('public'));

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server listens on port 3000
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

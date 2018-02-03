const express = require('express');
const app = express();
const path = require('path');
const PORT = 80;
app.listen(PORT, () => {
  console.log('listening in port', PORT);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, (req,res) => { 
    console.log(`⁠ Server is running on port ${port}`);
});
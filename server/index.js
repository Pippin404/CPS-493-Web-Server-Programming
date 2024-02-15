const express = require('express');
//comment

const app = express();
const PORT = 3000;

//set up your routes
app.get('/', (req, res) => {
  res.send('Hello friends!');
});

//once routes set up
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


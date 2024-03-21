const express = require('express');
const users = require('./controllers/users');
//comment

const app = express();
const PORT = 3000;

//set up your routes
app
  .use ('/api/v1/users', users);



//once routes set up
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


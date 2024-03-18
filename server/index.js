const express = require('express');
const users = require('./controllers/users.js');
//comment

const app = express();
const PORT = 3000;

//set up your routes
app.get('/', (req, res) => {
  res.send(users.hello());
})
.use ('/users', users);



//once routes set up
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


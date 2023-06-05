const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//server index page to root endpoint
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
})

//local error handler
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: err.message },
  };
  const errorObj = Object.assign(defaultErr, err);
  const errorStatus = errorObj.status || 500;
  return res.status(errorStatus).send(errorObj.message);
});

app.listen(PORT, ()=> console.log(`Server listening on Port: ${PORT}`));
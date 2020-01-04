const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const port = process.env.PORT || 3000;

// create express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multipart());

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;

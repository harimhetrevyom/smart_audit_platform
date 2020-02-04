const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const mongoose = require("mongoose");

app.use(cors())
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose
  .connect(
    'mongodb://localhost:27017/smart-audit-platform', {useNewUrlParser: true}
  )
  .then(() => {
    app.listen(5000);
    console.log('Server is running on Port 5000');
  })
  .catch(err => {
    console.log(err);
  });
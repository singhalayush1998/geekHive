const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./db/connect');

const PORT = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`Listening on 5000`);
  });
}

module.exports = start
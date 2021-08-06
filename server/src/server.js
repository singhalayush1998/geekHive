const express = require('express');
const mongoose = require('mongoose');
const app = express()

app.use(express.json())

const dotenv = require('dotenv');
dotenv.config();

// inporting connections
const connect = require('./db/connect');
const PORT = process.env.PORT;

//controllers
const {register, login} = require("./controllers/user.controller")
const PublicGroup = require("./controllers/publicGroup.controller")
const PublicGroupMessage = require("./controllers/publicGroupMessage.controller")

app.post("/register",register)
app.post("/login",login)

app.use(PublicGroup)
app.use(PublicGroupMessage)

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

module.exports = start
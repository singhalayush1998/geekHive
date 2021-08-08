const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const searchController= require("./controllers/search")

const app = express()

app.use(express.json())
app.use(cors())
const dotenv = require('dotenv');
dotenv.config();

// inporting connections
const connect = require('./db/connect');
const PORT = process.env.PORT;

//controllers
const {register, login} = require("./controllers/user.controller")
const PublicGroup = require("./controllers/publicGroup.controller")
const PublicGroupMessage = require("./controllers/publicGroupMessage.controller")
const PrivateGroup = require("./controllers/privateGroup.controller")
// const PrivateGroupMessage = require("./controllers/privateGroupMessage.controller")

app.post("/register",register)
app.post("/login",login)

app.use("/search", searchController)
app.use(PublicGroup)
app.use(PublicGroupMessage)
app.use(PrivateGroup)
// app.use(PrivateGroupMessage)

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

module.exports = start
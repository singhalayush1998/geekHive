const express = require('express');
const router = express.Router();
const Message = require("../modals/publicGroupMessage.model");

router.post("/newMessage", async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newMessage/:groupId", async (req, res) => {
    try {
      const messages = await Message.find({groupid:req.params.groupId.toString()});
      res.status(201).json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router
const express = require('express');
const router = express.Router();
const Group = require("../modals/publicGroup.model");
const User = require("../modals/user.model")

router.post("/newGroup", async (req, res) => {
  try {
    const newGroup = await Group.create(req.body);
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newGroup", async (req, res) => {
    try {
      const group = await Group.find();
      res.status(201).json(group);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
router.get("/newGroup/:id", async (req, res) => {
    try {
      const Individualgroup = await Group.findById(req.params.id);
      const {members} = Individualgroup 
      let membersArr = []
      members.forEach(async (id) => {
        const user = User.findById(id)
        membersArr.push(user);
      });
      Promise.all(membersArr).then((data) => {
        res.status(200).json({ member: data,ind : Individualgroup });
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router
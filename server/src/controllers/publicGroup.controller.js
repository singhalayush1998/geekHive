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

router.patch("/addmember",async (req,res)=>{
    try{
        const userId = req.body.id
        const userExists =await User.findById(userId)
        if(!userExists){
            res.status(401).json({message:"User doesn't exist please sign up"})
        }
        const group =await Group.findById(req.query.room)
        if(!group){
            res.status(401).json({message:"Please give a valid Group id"})
        }
        if(!group.members.includes(userId)){
            group.members.push(userId)
        }
        res.status(201).json({group:group})
    }catch(err){
        res.status(500).json(err)
    }
})

router.patch("/removemember/:groupId",async (req,res)=>{
    try{
        const userId = req.body.id
        const group =await Group.findById(req.params.groupId)
        if(!group){
            res.status(401).json({message:"Please give a valid Group id"})
        }
        let newMembers = group.members.filter((item)=>item!== userId)
        group.members = newMembers
        res.status(201).json({group:group})
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
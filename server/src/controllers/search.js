const express = require("express")
const router = express.Router()
const Group = require("../modals/publicGroup.model")


router.get("/", async(req, res) => {
    try{
        const search = req.query.s
        const resp = await Group.find({$text: {$search: search}})
        res.status(200).json({data: resp})
    }
    catch(e){
        res.status(404).send("something went wrong")
    }
})

module.exports = router
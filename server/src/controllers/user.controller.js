const User = require("../modals/user.model")


const register = async(req, res) => {
    try{
        const user = await User.create(req.body)
        return res.status(201).json({data: user})
    }catch(e){
        return res.status(500).json({status: "failed", message: "Something went wrong"})
    }
}
const login = async(req, res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(401).json({status: "failed",message: "User doesnt exist. Kindly Register"})
        }
        const passwordMatch = await user.checkPassword(req.body.password)
        if (!passwordMatch){
            return res.status(401).json({status: "failed",message: "Incorrect Password"})
        }
        return res.status(201).json({data: user})
    }catch (e) {
        return res.status(500).json({status: "failed",message: "Something went wrong."})
    }
}



module.exports = {
    register: register,
    login: login
}
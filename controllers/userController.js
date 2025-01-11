const users = require("../models/userModel");
const  jwt = require('jsonwebtoken')
//register

exports.register=async (req,res)=>{
    //logic
    console.log("inside register function");
    const{username,email,password}=req.body;
    console.log(username,email,password);
    try{
      const existingemail =await users.findOne({email})
         if(existingemail){
            res.status(406).json("user already exist")
         }
         else{
          const newUser = new users({
            username,
            email,
            password,
        }) 
        await newUser.save()
        res.status(200).json(newUser)
      }

}catch(error){
  res.status(401).json(error)
}
         
             
}
//login
exports.login = async(req,res)=>{
    const{email,password}=req.body
    console.log(email,password);
    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser)
        {
            const token = jwt.sign({userId:existingUser._id},'secretkey')
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json('Incorrect Email or password')
        }
        }
        catch(error)
        {
      res.status(401).json(error)
    }
}

//get users
exports.getAllUserController=async(req,res)=>{
      try{
           const allUsers=await users.find().sort({ _id: -1 })
           res.status(200).json(allUsers)
      }catch(error){
        res.status(401).json(error)
      }
  }

  //get username
exports.getusernameController=async(req,res)=>{
    const {id}=req.params
    try{
         const user=await users.findById({_id:id})
         res.status(200).json(user)
    }catch(error){
      res.status(401).json(error)
    }
  }
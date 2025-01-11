const feedbacks = require("../models/feedbackModel");

exports.addFeedbackController=async(req,res)=>{
    console.log("inside add feedback controller");

    const{feedback,status}=req.body
    console.log(feedback,status);
    const userId=req.payload;
    try{
          const newFeedback=new feedbacks({
               feedback,userId,status
            })
            await newFeedback.save()
            res.status(200).json(newFeedback)
         }
    catch(error)
    {
        res.status(401).json(error)
    }
}

//get all feedbacks
exports.getAllFeedbackController=async(req,res)=>{
    try{
         const allFeedbacks=await feedbacks.find().sort({ _id: -1 })
         res.status(200).json(allFeedbacks)
    }catch(error){
      res.status(401).json(error)
    }
}

// Controller to update feedback status
exports.updateFeedbackStatusController = async (req, res) => {
    const {feedbackId} = req.params; // Extract feedbackId and status from route params
    const{userId,feedback,status}=req.body

    try{
        const existingFeedback=await feedbacks.findByIdAndUpdate({_id:feedbackId},{userId,feedback,status},{new:true})
        console.log(existingFeedback)
        await existingFeedback.save()
        res.status(200).json(existingFeedback)
     }
     catch(error)
     {
       res.status(401).json(error)
     }  
}

// Controller to get all accepted status
exports.getAllacceptedFeedbackController = async (req, res) => {
  try{
    const allacceptedFeedbacks=await feedbacks.find({"status":'Accepted'}).sort({ _id: -1 }).limit(4)
    res.status(200).json(allacceptedFeedbacks)
}catch(error){
 res.status(401).json(error)
}
}
const mongoose=require('mongoose')
const feedbackSchema=new mongoose.Schema({
   feedback:
   {
    type:String,
    required:true
   },
   userId:
   {
    type:String,
    required:true
   },
   status:
   {
    type:String,
    required:true
   }
})

const feedbacks=mongoose.model("feedbacks",feedbackSchema)
module.exports=feedbacks
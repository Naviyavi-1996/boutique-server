const mongoose=require('mongoose')
const orderSchema=new mongoose.Schema({
   userid:{
    type:String,
    required:true
   },
   phone:{
    type:Number,
    required:true
   },
   address:{
    type:String,
    required:true
   },
   itemid:{
    type:String,
    required:true
   },
   size:{
    type:String,
    required:true
   },
   orderdate:{
    type:String,
    required:true
   },
   remarks:{
      type:String,
    required:true
   },
   status:{
    type:String,
    required:true
   }

})

const orders=mongoose.model("orders",orderSchema)
module.exports=orders
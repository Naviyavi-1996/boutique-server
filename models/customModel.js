const mongoose=require('mongoose')
const customSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    category:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
    },
    price:{
    type:String,
    required:true
    },
    size:{
   type:String,
    required:true
    },
    color:{
        type:String,
        required:true
    },
    noDatedelivery:{
        type:String,
        required:true
    },
    orderdate:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true

    },
    phone:{
    type:Number,
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

const customizations=mongoose.model("customizations",customSchema)
module.exports=customizations
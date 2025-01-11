const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema({
    category:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
    },
    price:{
    type:Number,
    required:true
    },
    color:{
        type:String,
        required:true
    },
    dispatchTime:{
        type:String,
        required:true
    },
    itemImage:{
        type:String,
        required:true
    }
   
})

const items=mongoose.model("items",itemSchema)
module.exports=items
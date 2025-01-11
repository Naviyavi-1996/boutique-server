const mongoose=require('mongoose')
const wishlistSchema=new mongoose.Schema({
    userid:{
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
        }  ,
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
const wishlistItems=mongoose.model("wishlistItems",wishlistSchema)
module.exports=wishlistItems
const cartItems = require('../models/cartModel');
//add to cart
exports.addtoCartController=async(req,res)=>{
  const{itemid,size,category,description,price,color,dispatchTime,itemImage}=req.body;
  const userid=req.payload;
  console.log(req.payload)
  console.log(itemid,userid,size,category,description,price,color,dispatchTime,itemImage);
  console.log(req.body)
    console.log(itemid,userid,size);
    try{
              const cartitem = new cartItems({
                itemid,userid,size,category,description,price,color,dispatchTime,itemImage
              }) 
              await cartitem.save()
              res.status(200).json(cartitem)
        

    }catch(error){
        res.status(401).json(error)
    }
}

//get cart
exports.getCartController=async(req,res)=>{
  const userId=req.payload
  try{
       const cartItem=await cartItems.find({"userid":userId})
       res.status(200).json(cartItem)
  }catch(error){
    res.status(401).json(error)
  }
}

//remove wishlist item
exports.removeCartController=async(req,res)=>{
  const {id}=req.params
  try{
      await cartItems.findByIdAndDelete({_id:id})
      res.status(200).json("removed Successfully")
  }catch(error)
  {
    res.status(401).json(error)
  }
}

//delete all cart items
exports.deleteCartController=async(req,res)=>{
  const userId=req.payload
  console.log("inside delete cart controller")
  try{
       const cartItem=await cartItems.deleteMany({"userid":userId})
       console.log(cartItem)
       res.status(200).json(cartItem)
  }catch(error){
    res.status(401).json(error)
  }
}
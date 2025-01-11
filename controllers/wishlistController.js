const wishlistItems = require('../models/wishlist');
//add to wishlistpara
exports.addtoWishlistController=async(req,res)=>{
    const{itemid,size,category,description,price,color,dispatchTime,itemImage}=req.body;
    const userid=req.payload;
    console.log(req.payload)
    console.log(itemid,userid,size,category,description,price,color,dispatchTime,itemImage);
    console.log(req.body)
    
    try{
              const wishitem = new wishlistItems({
                itemid,userid,size,category,description,price,color,dispatchTime,itemImage
              }) 
              await wishitem.save()
              res.status(200).json(wishitem)
        

    }catch(error){
        res.status(401).json(error)
    }
}

//get wishlist
exports.getWishlistController=async(req,res)=>{
  const userId=req.payload
  try{
       const wishlist=await wishlistItems.find({"userid":userId})
       res.status(200).json(wishlist)
  }catch(error){
    res.status(401).json(error)
  }
}

//remove wishlist item
exports.removeWishlistController=async(req,res)=>{
  const {id}=req.params
  try{
      await wishlistItems.findByIdAndDelete({_id:id})
      res.status(200).json("removed Successfully")
  }catch(error)
  {
    res.status(401).json(error)
  }
}

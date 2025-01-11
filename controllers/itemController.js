const items = require('../models/itemModel');
exports.addItemController=async(req,res)=>{
    console.log("inside add item controller");

    const{category,description,price,color,dispatchTime}=req.body
    console.log(category,description,price,color,dispatchTime);
    const itemImage = req.file.filename
    console.log(itemImage);
    try{
            const newItem=new items({category,description,price,color,dispatchTime,itemImage})
            await newItem.save()
            res.status(200).json(newItem)
         
    }catch(error)
    {
        res.status(401).json(error)
    } 
}

//get home items
exports.getHomeItemsController=async(req,res)=>{
    try{
         const homeItems=await items.find().sort({ _id: -1 }).limit(4)
         res.status(200).json(homeItems)
    }catch(error){
      res.status(401).json(error)
    }
}
//get all items
exports.getAllItemsController=async(req,res)=>{
  const search=req.query.search
  const searchKey=search.trim()
  console.log(searchKey);
    const query={
      $or: [
        { category: { $regex: searchKey, $options: "i" } },
        { color: { $regex: searchKey, $options: "i" } },
      ]

    } 
    try{
         const allItems=await items.find(query).sort({ _id: -1 })
         res.status(200).json(allItems)
    }catch(error){
      res.status(401).json(error)
    }
}

//get an item
exports.getAnItemController=async(req,res)=>{
  const {id}=req.params
  try{
       const item=await items.findById({_id:id})
       res.status(200).json(item)
  }catch(error){
    res.status(401).json(error)
  }
}
//update item controller
exports.updateItemController=async(req,res)=>{
  const {id}=req.params
  const{category,description,price,color,itemImage,dispatchTime}=req.body
  const uploadImage=req.file?req.file.filename:itemImage
  console.log(id,uploadImage,req.body)
  try{
     const updatedItem=await items.findByIdAndUpdate({_id:id},{category,description,price,color,itemImage:uploadImage,dispatchTime},{new:true})
     await updatedItem.save()
     res.status(200).json(updatedItem)
  }
  catch(error)
  {
    res.status(401).json(error)
  }


}
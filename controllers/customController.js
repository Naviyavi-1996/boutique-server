const customizations = require('../models/customModel');
const orders = require('../models/orderModel');
//add to customizations
exports.addtoCustomizationController=async(req,res)=>{
    const{category,size,price,description,color,orderdate,noDatedelivery,remarks,status,address,phone}=req.body;
    const userid=req.payload;
    console.log(category,size,price,description,color,orderdate,noDatedelivery,remarks,status,address,phone);
    console.log(userid)
    
    try{
              const customitem = new customizations({
                category,size,price,description,color,orderdate,noDatedelivery,userid,remarks,status,address,phone
              }) 
              await customitem.save()
              res.status(200).json(customitem)
        

    }catch(error){
        res.status(401).json(error)
    }
}
//get user customized order details
exports.getcustomOrderController=async(req,res)=>{
    const userId=req.payload
    try{
         const customItems=await customizations.find({"userid":userId}).sort({ _id: -1 })
         res.status(200).json(customItems)
    }catch(error){
      res.status(401).json(error)
    }
  }

  //get all custom orders
exports.getAllcustomOrdersController=async(req,res)=>{
  try{
       const allcustomizations=await customizations.find().sort({ _id: -1 })
       const deliveredCount=await customizations.find({'status':'Delivered'})
       const dispatchedCount=await customizations.find({'status':'Dispatched'})
       const acceptedCount=await customizations.find({'status':'Accepted'})
       const rejectedCount=await customizations.find({'status':'Rejected'})
       const canceledCount=await customizations.find({'status':'Canceled'})
       const returnedCount=await customizations.find({'status':'Returned'})
       const pendingCount=await customizations.find({'status':'pending'})

       console.log(allcustomizations)
       res.status(200).json(({
        customizations: allcustomizations,
        deliveredCount: deliveredCount.length,
        dispatchedCount: dispatchedCount.length,
        acceptedCount: acceptedCount.length,
        rejectedCount: rejectedCount.length,
        canceledCount: canceledCount.length,
        returnedCount: returnedCount.length,
        pendingCount: pendingCount.length,
      }))
  }catch(error){
    res.status(401).json(error)
  }
}

// Controller to custom order status
exports.updatecustomorderStatusController = async (req, res) => {
 
const {orderId} = req.params;
const{userId,category,description,color,size,orderdate,noDatedelivery,address,phone,status,remarks,price}=req.body

try{
    const customorders=await customizations.findByIdAndUpdate({_id:orderId},{userId,category,description,color,size,orderdate,noDatedelivery,address,phone,status,remarks,price},{new:true})
    console.log(customorders)
    await customorders.save()
    res.status(200).json(customorders)
 }
 catch(error)
 {
   res.status(401).json(error)
 }  
}

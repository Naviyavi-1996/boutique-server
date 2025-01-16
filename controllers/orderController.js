const customizations = require('../models/customModel');
const orders = require('../models/orderModel');
//add order
exports.addtoOrderController=async(req,res)=>{
    const{itemid,size,phone,address,orderdate,status,remarks,price,color,description}=req.body;
    const userid=req.payload;
    console.log(itemid,userid,size,phone,address,orderdate,status,remarks,price,color,description);
    try{
              const orderitem = new orders({
                userid,itemid,size,phone,address,orderdate,status,remarks,price,color,description
              }) 
              await orderitem.save()
              res.status(200).json(orderitem)
        

    }catch(error){
        res.status(401).json(error)
    }
}

//get user order details
exports.getuserOrderController=async(req,res)=>{
    const userId=req.payload
    try{
         const orderedItems=await orders.find({"userid":userId}).sort({ _id: -1 })
         res.status(200).json(orderedItems)
    }catch(error){
      res.status(401).json(error)
    }
  }
  
   //get all normal orders
exports.getAllnormalOrdersController=async(req,res)=>{
  try{
       const allorders=await orders.find().sort({ _id: -1 })
       const deliveredCount=await orders.find({'status':'Delivered'})
       const dispatchedCount=await orders.find({'status':'Dispatched'})
       const acceptedCount=await orders.find({'status':'Accepted'})
       const rejectedCount=await orders.find({'status':'Rejected'})
       const canceledCount=await orders.find({'status':'Canceled'})
       const returnedCount=await orders.find({'status':'Returned'})
       
       res.status(200).json(({
        normalorders: allorders,
        deliveredCount: deliveredCount.length,
        dispatchedCount: dispatchedCount.length,
        acceptedCount: acceptedCount.length,
        rejectedCount: rejectedCount.length,
        canceledCount: canceledCount.length,
        returnedCount: returnedCount.length,
      }))
  }catch(error){
    res.status(401).json(error)
  }
}

// Controller to update order status
exports.updatenormalorderStatusController = async (req, res) => {
  const {orderId} = req.params;
  const{userid,phone,address,itemid,size,orderdate,remarks,status,price,color,description }=req.body
  
  try{
      const normalorders=await orders.findByIdAndUpdate({_id:orderId},{userid,phone,address,itemid,size,orderdate,remarks,status,price,color,description},{new:true})
      console.log(normalorders)
      await normalorders.save()
      res.status(200).json(normalorders)
   }
   catch(error)
   {
     res.status(401).json(error)
   }  
}



//import

const express = require('express')

//import jwtmiddleware
const jwtmiddleware=require('./middleware/jwtmiddleware')

//import multer
const multerConfig = require('./middleware/multerMiddleware')
//import userController
const userController=require('./controllers/userController')


//import feedbackcontroller
const feedbackController= require('./controllers/feedbackController')

//import item controller
const itemController = require('./controllers/itemController')

//import wishlist controller
const wishlistController  = require('./controllers/wishlistController')

//import cart controller
const cartController  = require('./controllers/cartController')

//import order controller
const orderController  = require('./controllers/orderController')

//import custom Controller
const customController=require('./controllers/customController')


//instance router
const router=new express.Router()

//REGISTER
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//add item
router.post('/add-item',jwtmiddleware,multerConfig.single("itemImage"),itemController.addItemController)
module.exports=router

//home items
router.get('/home-item',itemController.getHomeItemsController)

//all items
router.get('/all-item',itemController.getAllItemsController)

//addwishlist
router.post('/add-wishlist',jwtmiddleware,wishlistController.addtoWishlistController)

//addcart
router.post('/add-cart',jwtmiddleware,cartController.addtoCartController)

//get wishlist
router.get('/get-wishlist',jwtmiddleware,wishlistController.getWishlistController)

//remove wishlistitem
router.delete('/remove-wishlist-item/:id',jwtmiddleware,wishlistController.removeWishlistController)

//get cart
router.get('/get-cart',jwtmiddleware,cartController.getCartController)

//remove cartitem
router.delete('/remove-cart-item/:id',jwtmiddleware,cartController.removeCartController)

//add order
router.post('/add-order',jwtmiddleware,orderController.addtoOrderController)

//remove cartitem
router.delete('/delete-cart-item',jwtmiddleware,cartController.deleteCartController)

//get user orders
router.get('/get-user-order',jwtmiddleware,orderController.getuserOrderController)

//get an item
router.get('/get-an-item/:id',jwtmiddleware,itemController.getAnItemController)

//add feedback

router.post('/add-feedback',jwtmiddleware,feedbackController.addFeedbackController)

//add customization
router.post(`/add-customization`,jwtmiddleware,customController.addtoCustomizationController)

//get customized user orders
router.get('/get-user-customized-order',jwtmiddleware,customController.getcustomOrderController)

//get all Users
router.get('/get-all-users',jwtmiddleware,userController.getAllUserController)


//get all feedbacks
router.get('/get-all-feedbacks',jwtmiddleware,feedbackController.getAllFeedbackController)

//update feedback
router.post('/update-status-feedback/:feedbackId',jwtmiddleware,feedbackController.updateFeedbackStatusController)

//get all accepted feedbacks
router.get('/get-all-accepted-feedbacks',feedbackController.getAllacceptedFeedbackController)

//get username
router.get('/get-username/:id',userController.getusernameController)

//get all custom orders
router.get('/get-all-custom-orders',jwtmiddleware,customController.getAllcustomOrdersController)

//update custom orders
router.post('/update-status-custom-orders/:orderId',jwtmiddleware,customController.updatecustomorderStatusController)

//get all normal orders
router.get('/get-all-normal-orders',jwtmiddleware,orderController.getAllnormalOrdersController)

//update normal orders
router.post('/update-status-normal-orders/:orderId',jwtmiddleware,orderController.updatenormalorderStatusController)

//update item 

router.put('/update-item/:id',jwtmiddleware,multerConfig.single('itemImage'),itemController.updateItemController)
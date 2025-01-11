require('dotenv').config();

//import 
const express = require('express')

//import cors
const cors=require('cors')

//import router
const router=require('./router')

//import connection
require('./connection')

//create server
const bServer=express()



//server using cors
bServer.use(cors())

//parse the data because it is in json format - the below will return a middle ware which will parse the databServer.use(express.json())
bServer.use(express.json())

//use router
bServer.use(router)

//exporting upload folder
bServer.use('/upload',express.static('./uploads'))

//port

const PORT = 4000||process.env.PORT

//listen

bServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`)
}) 
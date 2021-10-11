import express from "express"
import mongoose from "mongoose"
import listEndpoints from "express-list-endpoints"
import cors from "cors"
import productRouter from "./services/index.js"

const server = express()
const port = process.env.PORT || 3001

server.use(cors())
server.use(express.json())
server.use('/product',productRouter)

mongoose.connect(process.env.MONGO_CONNECTION)

mongoose.connection.on("connected", () =>{
    console.log('Successfully connected to mongo')

    server.listen(port , () =>{
        console.log("Server running successfully")
    })
})

mongoose.connection.on("error" ,err =>{
    console.log(err)
})

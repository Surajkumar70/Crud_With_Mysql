const express=require("express")
require("dotenv").config()
const app=express()
const port=process.env.port
const home=require("./routes/index")
app.use(express.json())
app.use("/",home)

app.listen(3000,(req,res)=>{
    console.log('server connected at port number 3000')
})


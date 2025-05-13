const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({
        status:`${Date.now()} OK!`
    })
})

app.listen(5000,(err)=>{
    if(err){
        console.log("server crashed ",err)
    }else{
        console.log("Server is running at 5000")
    }
})
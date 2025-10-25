const express=require("express")
const app=express();
const port=1669;

app.listen(port,()=>{
    console.log("listening...")
})

app.get("/app",(res,req)=>{
    req.send("we got your response")
})
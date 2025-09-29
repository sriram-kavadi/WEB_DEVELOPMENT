const express= require("express")
const app=express()
console.dir(app)
let port=3000
app.listen(port,()=>{
    console.log("hello world")
})

app.get("/",(req,res)=>{
    console.log("working")
    console.log("you conneted to root path")
})
app.get("/help",(req,res)=>{
    console.log("help is working or not ")
    res.send("your came here for help :)")
})

app.get("/search",(req,res)=>{
    console.log(req.query)
    let {q}=req.query;
    let {colour}=req.query;
    console.log(`${q}`);
    res.send(`${q}`);
    console.log(`${colour}`);
})
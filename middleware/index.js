const express=require("express");
const app=express();
const port=9999;
const ExpressError=require("./ExpressError")

app.get("/err",(req,res)=>{
    abcd=abcd;
})

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
}

app.get("/pass",checkToken,(req,res)=>{
    res.send("data");
});

app.use((err,req,res,next)=>{
    let {status=500,message="Some error"}=err;
    res.status(status).send(message); 
})

app.use("/admin",(req,res)=>{
    res.status(403).send("some error");
})

app.use("/api",(req,res,next)=>{
    console.log("This is a request");
    let {token}=req.query;
    if(token=="give access"){
        return next();
    }
    res.send("Access Deneied");
})

app.get("/api",(req,res)=>{
    res.send("data")
})

app.get("/random",(req,res)=>{
    res.send("This is a random page")
})

app.get("/home",(req,res)=>{
    res.send("This is home page")
})

app.listen(port,()=>{
    console.log("listeningg")
})
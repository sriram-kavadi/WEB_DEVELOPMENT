const express=require("express")
const app=express();
const path=require("path")
let port=8080;
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log("Our server is listening :)");
})
app.get("/home",(req,res)=>{
    let {username}=req.params;
    res.render("home.ejs",{username:username})
})
app.get("/rolldice",(req,res)=>{
    let {username}=req.params;
    let ans=Math.floor(Math.random()*6)+1;
    console.log(ans)
    res.render("rollDice.ejs",{diceVal : ans,username:username})
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let data=require("./data.json")
    if(data[username]){
        res.render("instapage.ejs",{json:data[username],username})
    }else{
        res.render("error.ejs",{username:username})
    }
})


const express=require("express");
const app=express();
const port=9292;
const path=require("path");

const { v4: uuidv4 } = require('uuid');

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,("public"))));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let post=[
    {
        id:uuidv4(),
        username:"nikhil",
        content:"i love coding"
    },
    {
        id:uuidv4(),
        username:"sriram",
        content:"i love being bore"
    },
    {
        id:uuidv4(),
        username:"alekhya",
        content:"i love to dance"
    },
    {
        id:uuidv4(),
        username:"madhu",
        content:"i am mad"
    }
]

app.listen(port,()=>{
    console.log("Port is listening");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{post:post})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let pos=post.find((p)=>id==p.id);
    console.log(pos);
    res.render("show.ejs",{post:pos})
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let pos=post.find((p)=>id==p.id);
    res.render("edit.ejs",{post:pos})
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
    let pos=post.find((p)=>id==p.id);
    console.log(newcontent)
    pos.content=newcontent;
    res.redirect("/posts")
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    post=post.filter((p)=>id!==p.id);
    res.redirect("/posts")
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    post.push({
        id:uuidv4(),
        username:username,
        content:content
    })
    res.redirect("/posts")
})
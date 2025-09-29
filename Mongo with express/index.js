const Chat=require("./models/chat.js")
//express set up
const express=require("express");
const app=express();
const port=1999;
app.listen(port,()=>{
    console.log("server listening...");
})

// method-override set-up
const methodOverride=require("method-override")
// middleware
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(methodOverride("_method")); // look for ?_method=PUT in URL

//views set up
const path=require("path")
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//style and script set up
app.use(express.static(path.join(__dirname,"public")))

// post set-up
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());

//mongoose set up
const mongoose=require("mongoose")
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// index route
app.get("/index",async(req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats})
})

// chat new route
app.get("/chats/new",(req,res)=>{
    res.render("newChat.ejs");
})

app.post("/chats",(req,res)=>{
    let {from,content,to}=req.body;
    Chat.insertOne({
        from:from,
        to:to,
        content:content,
        createdAt:new Date()
    }).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
    res.redirect("/index");
})

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let datas=await Chat.find();
    let data=[];
    for(element of datas){
        if(element.id==id){
            data.push(element);
        }
    }
    console.log(data[0]);
    let dat=data[0];
    res.render("edit.ejs",{dat});
})

app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {from,content,to}=req.body;
    await Chat.findByIdAndUpdate(id,{content:content},{runValidators:true},{new:true}).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    res.redirect("/index")
})

//delete route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
    res.redirect("/index")
})
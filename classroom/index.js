const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cookieparser = require("cookie-parser");
const session = require("express-session");
const flash=require("connect-flash")
const sessionOptions = {
  secret: "mypeoples",
  resave: false,
  saveUninitialized: true,
};
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(cookieparser("secretcode"));
app.use(session(sessionOptions));
app.use(flash())

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    req.flash("success","user register successfully")
    console.log(req.session.name)
    res.redirect("/hello")

})

app.get("/hello",(req,res)=>{
    res.render("one.ejs",{i: req.session.name,msg:req.flash("success")})

})

app.listen(port, () => {
  console.log("listing...");
});

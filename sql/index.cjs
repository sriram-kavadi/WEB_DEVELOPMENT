const express=require("express");
const app=express();
const port=9999;
//faker-js package
const { faker } = require('@faker-js/faker');

const createRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
//mysql2 package setup
const mysql=require("mysql2");


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Nikhil@8909"
});

try{
    connection.query("SELECT * FROM user",(err,result)=>{
    if(err) throw err;
    })
}catch (err){
    console.log(err);
}

//method-override 
const methodOverride=require("method-override");
app.use(methodOverride("_method"))

//uuid 
const { v4: uuidv4 } = require('uuid');


//views folder
const path=require("path");
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"));
//public folder
app.use(express.static(path.join(__dirname,"./public")));
//proper api request
app.use(express.urlencoded({extended:true}));


//home route
app.get("/",(req,res)=>{
  let q="SELECT count(*) FROM user";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let ans=result[0]["count(*)"];
      res.render("main.ejs",{ans});
    })
  }catch (err){
    console.log(err);
  }
})


//user route
app.get("/user",(req,res)=>{
  let q="SELECT * FROM user";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let ans=result[0]["*"];

      res.render("user.ejs",{ans:result});
    })
  }catch (err){
    console.log(err);
  }
})

//edit username
app.get("/user/:id/edit",(req,res)=>{
  let userarr;
  let {id}=req.params;
  console.log(id);
  try{
    connection.query("SELECT * FROM user",(err,result)=>{
      if (err) throw err;
      result.forEach((value)=>{
        if(value.id==id){
          userarr=value;
          console.log(value)
          console.log(userarr)
          return;
        }
      })
      res.render("useredit.ejs",{userarr});
    })
  }catch (err){
    console.log(err);
  }
})

app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formpassword,username:formusername}=req.body;
  console.log(formpassword,formusername);
  let q = `SELECT * FROM user WHERE id='${id}'`;
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    let userarr = result[0];
    if(formpassword==userarr.password){
      let q2=`UPDATE user SET username='${formusername}' WHERE id='${id}'`;
      connection.query(q2,(err,result)=>{
        if(err){
          console.log(err);
        }
        console.log(result);
      })
      res.redirect("/user");
    }else{
      res.send("wrong password!!");
    }
  });
})

//add user route
app.get("/user/add/new",(req,res)=>{
  res.render("add.ejs")
})
app.post("/user/add",(req,res)=>{
  let {username:formusername,email:formemail,password:formpassword}=req.body;
  let id=uuidv4();
  let q=`INSERT INTO user VALUES ('${id}','${formusername}','${formemail}','${formpassword}')`;
  try{
    connection.query(q,(err,result)=>{
      if(err){
        console.log(err);
      }
      console.log(result);
      console.log("done!!");
      res.redirect("/user")
    })
  }catch(err){
    console.log(err);
  }
})

app.get("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
  res.send(id)
})
app.delete("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
  console.log(id)
  let q=`DELETE FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err){
        console.log(err);
      }
      console.log(result);
      console.log("done deletion:?");
      res.redirect("/user")
    })
  }catch (err){
    console.log(err);
  }

})
//server setup and routing...
app.listen(port,()=>{
    console.log("app is listening");
})


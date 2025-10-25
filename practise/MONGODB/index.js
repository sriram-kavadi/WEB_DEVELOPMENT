const mongoose=require("mongoose");

main().then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err)
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/NIKHILDB");
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User=mongoose.model("User",userSchema);

User.insertMany([
    {
        name:"nikhil",
        email:"kavadi.nikhil8909@gmail.com",
        age:18
    },
    {
        name:"madhu",
        email:"madhu@gmail.com",
        age:28,
    },
    {
        name:"akhil",
        email:"akhil@gmail.com",
        age:19
    }
]).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})
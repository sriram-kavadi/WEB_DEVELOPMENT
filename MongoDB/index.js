const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

User.deleteOne({name:"nikhil"}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

// User.findOneAndUpdate({name:"nikhil"},{age:20},{new:true}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// User.updateMany({age:18},{age:19}).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

// User.findOne({age:18}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({name:"nikhil"}).then((data)=>{
//     console.log(data[0].name);
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([
//     {name:"alekhya",email:"alekhya@gmail.com",age:18},
//     {name:"madhu",email:"madhu@gmail.com",age:18},
// ]).then((data)=>{
//     console.log(data);
// });

// const user1=new User({name:"nikhil",email:"kavadi.nikhil8909@gmail.com",age:18});
// const user2=new User({name:"sriram",email:"kavadi.sriram@gmail.com",age:18});

// user1.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });
// user2.save();
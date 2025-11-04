const mongoose = require('mongoose');
main().then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
})

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

const instaUserSchema=new mongoose.Schema({
    name:String,
    followers:Number,
    following:Number,
})

const instaPostSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instaUser"

    }
})

const instaUser=mongoose.model("instaUser",instaUserSchema)
const instaPost=mongoose.model("instaPost",instaPostSchema)

const addPost=async()=>{
    let post1=new instaPost({
        content:"i love my life",
        likes:34,
    })
    let post2=new instaPost({
        content:"i want to become a doctor",
        likes:80,
    })
    let user1=await instaUser.findOne({name:"nikhil"});
    let user2=await instaUser.findOne({name:"pisachii"});
    post1.user=user1;
    post2.user=user2;

    post1.save();
    post2.save();
}

addPost()

// const addUser=async()=>{
//     let user1=new instaUser({
//         name:"nikhil",
//         followers:183,
//         following:302
//     })

//     let user2=new instaUser({
//         name:"pisachii",
//         followers:190,
//         following:187
//     })

//     user1.save();
//     user2.save();
// }

// addUser();
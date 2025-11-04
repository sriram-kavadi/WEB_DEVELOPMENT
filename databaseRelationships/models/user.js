const mongoose = require('mongoose');
main().then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
})

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

const userSchema=new mongoose.Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String
        }
    ]
})

const User=mongoose.model("User",userSchema)

const addUser=async()=>{
    let user1=new User({
        username:"nikhil",
        addresses:[
            {
                
                location:"221B streets",
                city:"london"
            }
        ]
    })
    user1.addresses.push({
        location:"new city town",
        city:"london"
    })
    await user1.save();
}

addUser();
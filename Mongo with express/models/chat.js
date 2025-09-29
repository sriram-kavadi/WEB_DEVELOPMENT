const mongoose=require("mongoose")

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        require:true,
    },
    to:{
        type:String,
        require:true,
    },
    content:{
        type:String,
    },
    createdAt:{
        type:Date,
        require:true,
    }
})

const Chat=mongoose.model("Chat",chatSchema);

module.exports=Chat;
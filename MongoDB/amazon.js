const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema=new mongoose.Schema({
    tittle:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    }
})

const Book= mongoose.model("Book",bookSchema);

Book.insertOne({tittle:"nikhil",author:"my life",price:9999});

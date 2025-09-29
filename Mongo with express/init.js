const mongoose=require("mongoose")
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const Chat=require("./models/chat.js")
const messages = [
  { from: "rahul", to: "priya", content: "hello", createdAt: new Date() },
  { from: "nikhil", to: "manoj", content: "good morning", createdAt: new Date() },
  { from: "kavya", to: "sriram", content: "what's up?", createdAt: new Date() },
  { from: "ananya", to: "alekhya", content: "take care", createdAt: new Date() },
  { from: "sriram", to: "rahul", content: "call me", createdAt: new Date() },
  { from: "priya", to: "kavya", content: "see you soon", createdAt: new Date() },
  { from: "manoj", to: "ananya", content: "done", createdAt: new Date() },
  { from: "alekhya", to: "nikhil", content: "good night", createdAt: new Date() },
  { from: "rahul", to: "kavya", content: "are you free?", createdAt: new Date() },
  { from: "priya", to: "sriram", content: "check this out", createdAt: new Date() },
  { from: "manoj", to: "alekhya", content: "sure", createdAt: new Date() },
  { from: "kavya", to: "ananya", content: "hi", createdAt: new Date() },
  { from: "alekhya", to: "rahul", content: "where are you?", createdAt: new Date() },
  { from: "sriram", to: "nikhil", content: "cool", createdAt: new Date() },
  { from: "ananya", to: "priya", content: "okay", createdAt: new Date() },
  { from: "rahul", to: "manoj", content: "thanks", createdAt: new Date() },
  { from: "kavya", to: "alekhya", content: "welcome", createdAt: new Date() },
  { from: "nikhil", to: "priya", content: "bye", createdAt: new Date() },
  { from: "sriram", to: "kavya", content: "let’s meet tomorrow", createdAt: new Date() },
  { from: "priya", to: "ananya", content: "how are you?", createdAt: new Date() },
];

Chat.insertMany(messages).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err)
})
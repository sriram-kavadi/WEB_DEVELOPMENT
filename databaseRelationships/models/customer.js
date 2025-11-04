const mongoose = require('mongoose');
main().then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
})

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

const orderSchema=new mongoose.Schema({
    item:String,
    price:Number,
})

const customerSchema=new mongoose.Schema({
    name:String,
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})

customerSchema.post("findOneAndDelete",async(Customer)=>{
    if(Customer.orders){
        let result=await Order.deleteMany({_id:{$in:Customer.orders}});
        console.log(result);
    }
})

const Order=mongoose.model("Order",orderSchema);

const Customer=mongoose.model("Customer",customerSchema);

const addCustomer=async()=>{
    let cut1=new Customer({
        name:"pisachii",
    })

    let order1=new Order({
        item:"notebook",
        price:55
    })

    let order2=new Order({
        item:"pens",
        price:20
    })

    await order1.save();
    await order2.save();
    cut1.orders.push(order1);
    cut1.orders.push(order2);
    await cut1.save();
}



const deleteCustomer=async()=>{
    let result=await Customer.findByIdAndDelete("690a0d8b105e7e2d988c3620")
    console.log(result);
}

deleteCustomer();

// const addOrder=async()=>{
//     await Order.insertMany([
//         {
//             item:"milk",
//             price:30
//         },
//         {
//             item:"egg rice",
//             price:99
//         },
//         {
//             item:"chicken",
//             price:250
//         }
//     ])
// }

// addOrder()
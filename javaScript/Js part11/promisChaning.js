const h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        if(h1){
            setTimeout(() => {
                h1.style.color=color;
                resolve("color has been changed");
            }, delay);
            
        }else{
            reject("No heading found");
        }
    })

}

async function task() {
    await changeColor("blue",2000);
    await changeColor("green",2000);
    await changeColor("orange",2000);
    await changeColor("violet",2000);
    return "completed"
}

task()
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    });

// changeColor("blue",2000)
//     .then((result)=>{
//         console.log(result);
//         return changeColor("orange",2000);
//     })
//     .then((result)=>{
//         console.log(result);
//         return changeColor("green",2000);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// changeColor("blue",2000,()=>{
//     changeColor("orange",3000,()=>{
//         changeColor("green",4000)
//     })
// })



// function saveToDb(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("data was saved");
//         }else{
//             reject("week connection");
//         }
//     })  
// }

// saveToDb("apnaCollege")
//     .then((result)=>{
//         console.log(result)
//         console.log("promise 1 is completed");
//         return saveToDb("helloworld");
//     })
//     .then((result)=>{
//         console.log(result)
//         console.log("promise 2 is completed");
//     })
//     .catch((error)=>{
//         console.log(error);
//         console.log("failed");
//     })
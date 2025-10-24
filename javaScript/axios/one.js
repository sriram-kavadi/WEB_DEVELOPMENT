let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";

let button=document.querySelector("#cat");
let para=document.querySelector("#facts");

let button2=document.querySelector("#dog");
let img=document.querySelector("#img");

async function getfacts(){
    try{
        let res=await axios.get(url);
        para.innerText=res.data.fact;
        console.log(res.data.fact);
    }catch(e){
        console.log(e);
    }

    console.log("Bye");
}

async function getRandomDog(){
    let res=await axios.get(url2);
    img.src=res.data.message;
    console.log(res.data.message);
}

button.addEventListener("click",()=>{
    getfacts();
})

button2.addEventListener("click",()=>{
    getRandomDog();
})


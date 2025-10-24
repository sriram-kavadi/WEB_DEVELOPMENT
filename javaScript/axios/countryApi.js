let url="https://restcountries.com/v3.1/name/";

const input=document.querySelector("#name");
const button=document.querySelector("#search");
const capital=document.querySelector("#capital");

async function getCountry(country){
    try{
        let res= await axios.get(url+country);
        console.log(res.data[0].capital);
        capital.innerText=res.data[0].capital;
    }catch(e){
        console.log(e);
        capital.innerText="Not found country!";
        console.log("Not found country!");

    }
}

input.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        let country=input.value;
        getCountry(country);
    }
})

button.addEventListener("click",()=>{
    let country=input.value;
    getCountry(country);
})
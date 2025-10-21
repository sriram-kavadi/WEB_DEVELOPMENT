const heading=document.querySelector("h1");
const something=document.querySelector("#something");
const form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.defaultPrevented();

})

something.addEventListener("input",function(){
    heading.innerText=this.value
})
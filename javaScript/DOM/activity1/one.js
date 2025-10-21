function random(){
    return Math.floor(Math.random()*255);
}

const btn=document.querySelector(".btn");
const box=document.querySelector(".box");
const heading=document.querySelector(".heading");

btn.addEventListener("click",()=>{
    let c1=random();
    let c2=random();
    let c3=random();

    box.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    heading.innerText=`rgb(${c1},${c2},${c3})`;
})
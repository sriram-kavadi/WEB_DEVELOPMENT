const heading=document.querySelector("h1");
const task=document.querySelector("#task");
const btn=document.querySelector("#submit");
const div=document.querySelector("#div1");
const li=document.querySelector("ul");
const p=document.querySelector("p");
const reset=document.querySelector("#reset");

let divHtml=``;
let array=[];

function resets(){
    divHtml=``;
    li.innerHTML=divHtml;
    p.style.display="block";
}

function delets(value){
    array = array.filter((id) => id != value);
    console.log(array)
    if(array.length==0){
        p.style.display="block";
    }
    divHtml=``;
    for(i of array){
        divHtml+=`<li><div id="div2">${i}<button value="${i}" class="dataTask">Delete</button></div></li>`;
    }
    li.innerHTML=divHtml;
    const dataTask=document.querySelectorAll(".dataTask");
    for(btns of dataTask){
        btns.addEventListener("click",function(event){
            console.log(event.target.value);
            delets(event.target.value)
        })
    }
}

function addTask(){
    if(task.value==""){
        return;
    }
    divHtml=``;
    work=task.value;
    task.value="";
    array.push(work);
    for(i of array){
        divHtml+=`<li><div id="div2">${i}<button value="${i}" class="dataTask">Delete</button></div></li>`;
    }
    li.innerHTML=divHtml;
    p.style.display="none";
    const dataTask=document.querySelectorAll(".dataTask");
    for(btns of dataTask){
        btns.addEventListener("click",function(event){
            console.log(event.target.value);
            delets(event.target.value)
        })
    }
}

btn.addEventListener("click",addTask)

task.addEventListener("keydown",function(event){
    if(event.code=="Enter"){
        addTask();
    }
})

reset.addEventListener("click",resets)

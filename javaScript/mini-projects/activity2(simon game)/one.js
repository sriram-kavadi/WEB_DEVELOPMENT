const subHeading=document.querySelector("#subHeading");
const mainDiv=document.querySelector(".mainDiv");
const subDiv=document.querySelectorAll(".subDivs");
const box1=document.querySelector("#div1");
const box2=document.querySelector("#div2");
const box3=document.querySelector("#div3");
const box4=document.querySelector("#div4");

let isStart=false;
let simonNum=[];
let playerNum=[];
let score=0;

for(sub of subDiv){
    sub.addEventListener("click",function(event){
        console.log(event.target.getAttributeNode("value").nodeValue)
        if(!isStart){
            isStart=true;
            subHeading.innerText=`Level ${score+1}`;
            random();
        }else{
            playerNum.push(event.target.getAttributeNode("value").nodeValue);
            blink(event.target.getAttributeNode("value").nodeValue)
            check();
        }
    });
}

function random(){
    let randomNum=Math.floor(Math.random()*4)+1;
    simonNum.push(randomNum);
    setTimeout(() => {
        blink(randomNum);
    }, 1000);
}

function check(){
    for(i=0;i<playerNum.length;i++){
        if(playerNum[i]!=simonNum[i]){
            loss(score);
            return;
        }
    }
    if(playerNum.length==simonNum.length){
        score++;
        playerNum=[];
        subHeading.innerText=`Level ${score+1}`;
        random();
    }
}

function loss(scores){
    subHeading.innerHTML=`<h3 id="subHeading" >GAME OVER! Your score was ${scores}</h3><h3 id="subHeading" >Press any key to restart</h3>`
    simonNum=[];
    playerNum=[];
    score=0;
    isStart=false;
}

function blink(value){
    if(value==1){
        box1.classList.add("blink");
        box1.addEventListener("animationend", function() {
        box1.classList.remove("blink");
        }, { once: true });
    }else if(value==2){
        box2.classList.add("blink");
        box2.addEventListener("animationend", function() {
        box2.classList.remove("blink");
        }, { once: true });
    }else if(value==3){
        box3.classList.add("blink");
        box3.addEventListener("animationend", function() {
        box3.classList.remove("blink");
        }, { once: true });
    }else{
        box4.classList.add("blink");
        box4.addEventListener("animationend", function() {
        box4.classList.remove("blink");
        }, { once: true });
    }
}
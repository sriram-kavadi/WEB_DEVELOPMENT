let para=document.createElement("p");
para.innerText="Hey! I am red!";
para.style.color="red";
let heading=document.querySelector("h1");
heading.prepend(para)

let h3=document.createElement("h3");
h3.innerText="I'm a blue h3!";
h3.style.color="blue";
heading.insertAdjacentElement("afterend",h3)

let div=document.createElement("div");
div.style.border="2px solid black";
div.style.backgroundColor="pink";
heading.insertAdjacentElement("afterend",div)

let h1=document.createElement("h1");
h1.innerText=`That says "I'm in a div"`
let p=document.createElement("p");
p.innerText=`That says "ME TOO!`;

div.appendChild(h1);
div.appendChild(p)
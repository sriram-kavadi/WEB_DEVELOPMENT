function poem(){
    console.log(`The wind hums softly through the trees,
A secret song carried with ease.
Leaves like dancers twirl and sway,
Chasing sunlight, then drift away.

The river laughs, a silver thread,
Winding through dreams the heart has fed.
Clouds like ships sail skies of blue,
Carrying wishes I never knew.

In quiet corners, moments hide,
Where hope and memory gently collide.
And in that hush, the world feels right,
Bathed in the soft glow of twilight.`
            )
}

function dice(){
    console.log("dice number is: ",Math.floor(Math.random()*6)+1)
}

function average(a,b,c){
    console.log(`average of ${a,b,c} is ${(a+b+c)/3}`)
}

function multiplicationTable(n){
    for(i=1;i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

function printName(name){
    return name;
}

function sum(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

let names = ["Alice", "Brian", "Chloe", "David", "Emma", "Frank"];

function concatArray(names){
    let name="";
    for(ele of names){
        name+=ele+" ";
    }
    return name;
}

const sums=function(a,b){
    return a+b;
}

function multipleGreet(func,n){
    for(i=0;i<n;i++){
        func();
    }
}

function func(){
    console.log("hello")
}

multipleGreet(func,2);


let request=prompt("Enter request: ");

function evenOddRequest(request){
    if(request=="even"){
        return function(n){
            console.log(n%2==0)
        }
    }else if(request=="odd"){
        return function(n){
            console.log(!n%2==0);
        }
    }else{
        console.log("request is wrong");
    }
}


let calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}

calculator.add(1,2)


// const sum=(a,b)=>{a+b}
// const mul=(a,b)=>{a*b}
// const pi=3.14
// let obj={
//     sum:sum,
//     mul:mul,
//     pi:pi,
// }
// module.exports=obj


class students{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    print(){
        console.log(`my name is ${this.name}`)
    }
}

class teacher extends students{
    constructor(name,age,salary){
        super(name,age);
        this.salary=salary;
    }
}

let t1=new teacher("nikhil",18,999999);
t1.print();

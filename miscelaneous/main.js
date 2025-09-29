class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hello!! ${this.name}`);
    }
}
class Students extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}
class Teachers extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}
let s1=new Students("nikhil",18,91);
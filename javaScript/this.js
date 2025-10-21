const student={
    name:"nikhil",
    age:18,
    ppt:this,
    getName:function(){
        console.log(this);
        return this.name;
    },
    getAge:()=>{
        console.log(this);
        return this.age;
    },
    getInfo1:function(){
        console.log(this)
        setTimeout(()=>{
            console.log(this)
        },2000);
    },
    getInfo2:function(){
        console.log(this)
        setTimeout(function(){
            console.log(this);
        },2000)
    }
}


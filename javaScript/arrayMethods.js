function sum(...arg){
    return arg.reduce((res,el)=>{
        return res+el
    })
}
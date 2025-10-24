async function hello() {
    return "success";
}

hello()
    .then((result)=>{
        console.log("success");
        console.log(result);
    })
    .catch((err)=>{
        console.log(err)
    })
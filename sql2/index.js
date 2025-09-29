

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'newroot',
  database: 'test',
  password:'Nikhil@8909'
});

try{
    connection.query("SHOW TABLES",(err,result)=>{
    if (err) throw err;
    console.log(result)
})
}catch (err){
    console.log(err);
}


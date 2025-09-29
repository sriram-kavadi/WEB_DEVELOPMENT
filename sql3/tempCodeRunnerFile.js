try{
connection.query(p,array, (err, result) => {
  if (err) throw err;
  console.log(result);
});
}catch(err){
  console.log(err);
}
connection.end();
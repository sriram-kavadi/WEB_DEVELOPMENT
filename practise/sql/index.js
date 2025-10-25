import mysql from 'mysql2';

import { faker } from '@faker-js/faker';


let get_user=()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}



// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nikhilDB',
  password:"Nikhil@8909"
});

let q="insert into user (id,username,email,password) values ?"
let data=[];

try{
    connection.query("select *from user",(err,result)=>{
        console.log(result)
    })
    connection.end()
}






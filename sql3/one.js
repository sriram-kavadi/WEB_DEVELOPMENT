const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Nikhil@8909"
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let data = [];
for (let i = 0; i < 90; i++) {
  data.push(createRandomUser());
}

let p = "INSERT INTO user (id, username, email, password) VALUES ?";

connection.query(p, [data], (err, result) => {
  if (err) {
    console.error("Error inserting data:", err);
  } else {
    console.log("Inserted rows:", result.affectedRows);
  }
  connection.end();
});

const { faker } = require('@faker-js/faker');

const createRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.image.avatar(),
    faker.internet.password(),
    faker.date.birthdate(),
    faker.date.past(),
  ];
}

import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'NIKHIL@8909'
});
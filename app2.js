let mysql = require('mysql');
const express = require('express');

const app = express();
let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlworkbench',
  database: 'my-db'
});

// connect to the MySQL server
db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message); 
  }
//=================> CREATING TABLES 
//   let createTable = `create table if not exists table1(
//                           id int primary key auto_increment,
//                           title varchar(255)not null,
//                           email varchar(255)not null
//                       )`;

//   db.query(createTable, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

  //===============================> INSERTING VALUES IN TABLE

  const insertData = `INSERT INTO table1(title,email) VALUES('shesay','99092778')`;
  db.query(insertData, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  //=========================>retrieving specific data

  const retrieve =`SELECT title FROM table1 WHERE email = "xxx"`;
  db.query(retrieve, (err, result, fields) =>{
    if(err) throw err;
    console.log(result);
  });

// ========================> dELETING DATA

const delData = `DROP TABLE table1 `;
db.query(delData,(err, result, fields)=>{
    if(err) throw err;
    console.log('success');

});




  db.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});


app.listen('3000', (err)=>{
    console.log("server started");
});



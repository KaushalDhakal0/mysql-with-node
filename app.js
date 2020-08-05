const express = require('express');
const mysql = require('mysql');


const app= express();



// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlworkbench',
    database: 'my-db'
    
});

//connect

db.connect((err)=>{
    if (err) {
        throw err;
    }

    app.get('/createTable' , (req, res) =>{

        let query = `create table if not exists todos(id int primary key auto_increment, title varchar(255)not null`;
        db.query(query, (err, result, fields) =>{
            if(err) throw err;
            
        });
    });
    // console.log('hello');
    // const query = 'SELECT * FROM posts';
    // db.query(query, (err, result, fields)=>{
    //     if(err) throw err;
    //     console.log('table created...');
    //     console.log(result);
    // });
        
    
});

//create 

//create Db
// app.get("/createDb", (req, res) =>{
//     db.query('CREATE DATABASE hell', (err, result) =>{
//         if (err) {
//             throw err;
//         }
//         console.log(result);
//         res.send('database created.....');   
//     });

// });

//create table

app.get('/createTable', (req, res)=>{
    db.query('create table if not exists table1(
        id int primary key auto_increment,
        title varchar(255)not null,
        email varchar(255)not null', 
        (err, result, fields)=>{
            if(err) throw err;
            console.log('table created');


        });
})


// INSERT POST 1
// app.get('/insert1', (req, res)=>{
//     let post = {title: 'Post One', body: "body of post 1"};
//     let sql = 'INSERT INTO posts SET ?';
//     db.query(sql, post , (err , result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('post 1 added');
//     });

// });

// app.get('/insert2', (req, res)=>{
//     let post = {title: 'Post two', body: "body of post 2"};
//     let sql = 'INSERT INTO posts SET ?';
//     db.query(sql, post , (err , result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('added post-2');
//     });

// });

app.get('./retrieve', (req, res) =>{
    let sql = "SELECT * FROM posts";
    db.query(sql, (err, results , fields) =>{
        if(err) throw err;
        console.log(results);
        res.send('posts fetched');
    });
});



app.listen('3000', () =>{
    console.log('server started on port 3000');
});


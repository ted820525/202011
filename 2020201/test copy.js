const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000');

});

// 創造3000網域,再用 nodemon測試


// ---------------20200205

const express = require('express');
const db = require('./comnetdb/get.js').MySQLConnector();
const app = express();

//Creat DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE foodbata';
    //注意DB的語法__如剛剛所輸入的錯誤或是空格
    db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

//Create table

app.get('/createpoststable',(req,res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    //'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255) PRIMARY KEY id)'; --錯誤SQL程式碼
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);

    });

});

//Insert post 1

app.get('/addpost1', (req,res) => {
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err ,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);

    });

});


//Insert post 2
app.get('/addpost2', (req,res) => {
    let post = {title:'NBA', body:'Russell'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err ,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts 2 added...');

    });

});

//Select posts

app.get('/getposts', (req,res) => {
    let sql = 'SELECT * FROM `posts`';
    let query = db.query(sql, (err ,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts 2 fetched...');
    });
});

//Select single post
app.get('/getposts/:id', (req,res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err ,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

//Update post
//更改title
app.get('/updatposts/:id', (req,res) => {
    let newTitle = 'Hi KOBE';
    let sql = `UPDATE posts SET body = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err ,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post update...');
    });
});


//Delete post
//delete post 2
app.get('/deleteposts/:id', (req,res) => {
    let newTitle = 'Hi KOBE';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err ,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post delete...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');

});

// --------------------------------------

var http = require('http'); 
 
var server = http.createServer(function (req, res) {   
 
    if (req.url == '/data') { //check the URL of the current request
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: "Hello World"}));
            res.end();
    }
});
 
server.listen(5000);
 
console.log('Node.js web server at port 5000 is running..')

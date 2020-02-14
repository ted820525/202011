const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000');

});

// 創造3000網域,再用 nodemon測試

// host        :'35.234.0.4',
// user        :'root',
// password    :'ted820525',


//-----------------part2 created2 batabase

const express = require('express');
const mysql = require('mysql');

//Creat connection

const db =mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'foodbata'


});

//Connect
db.connect((err) => {
    
    if(err){
        throw err;
    }
    console.log('MySql Connected....');

});

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

app.listen('3000', () => {
    console.log('Server started on port 3000');

});

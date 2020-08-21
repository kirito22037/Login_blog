const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mysqlConnect = require('./MysqlDetails');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`serevr active at ${port}`);
    mysqlConnect.connect(err=>{
        if(!err)
        console.log('Database connected');
        else
        console.log('Database connection Failed '+ JSON.stringify(err,undefined,2));
    });
});


//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/users' , (req, res) => {
    mysqlConnect.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
    })
} );

app.post('/user', (req, res)=>{
    console.log(req.body);
    mysqlConnect.query('SELECT * FROM users WHERE email=?', [req.body.email] , (err, rows, fields) => {
        if (!err)
        {   //if user exists

            if(rows.length) {
                //check password
                console.log("original password : ", rows[0].password );
                console.log("uuser typed password : ", req.body.password );
                if(rows[0].password === req.body.password) {
                    res.status(200).json({
                    data : rows,
                    status : "user logged in"});
                }
                else {
                    res.status(200).json({
                        status : "password doest match" });
                }
            }
            else {
                res.status(200).json({
                    data : rows,
                    status : "no user found"
                })
            }
        }
        else
        {
            console.log(err);
            res.status(501).json({
                status : "cant log in"
            });
        }
    });
});
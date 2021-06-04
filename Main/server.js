//Imports
const express = require('express');
const path = require('path');
const fs = require('fs');


//Host & Port
const host = "localhost";
const port = 8080;

//Create Express Application
const app = express();

//Send Files
app.get('*', (req, res) => {
    filename = '../html' + req.path;
    console.log(filename);
    if(filename == '../html/'){
        res.sendFile(path.join(__dirname, '../html/index.html'));
    }
    else if (!fs.existsSync(filename)){
        res.sendStatus(404);
    }
    else {
        res.sendFile(path.join(__dirname, filename));
    }
})

//Login post
app.post('/account/login-post', (req, res) => {
    res.send("test");
})

//Open Server
app.listen(port, host, () => {
    console.log(`Server listening at http://${host}:${port}`)
})
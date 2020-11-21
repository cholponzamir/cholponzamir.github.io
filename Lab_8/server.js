const express = require('express')
const app = express()

// Code here for how to set 'public' as the static folder for express
app.use(express.static('public'))
// Code here to have the app listen on port 8080....please provide a console.log message
const port = 8080;
app.listen(port,function(){
    console.log('app listen on port 8080 ' + port);
     })

     //commands:cd Lab_8,npm init,zamir_lab8, 
     //npm install express
     //node server.js
     //go on browser and enter localhost8080
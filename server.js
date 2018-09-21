const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require('mysql')
const multer = require('multer');
const fs = require('fs');



const storage = multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,'./app/uploads/');
    },
    filename: function(req,file,cb){
      cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname);
    }
  });

  const upload = multer({storage: storage});


  PORT = 80;

var app = express();

app.use(express.static("public"));

// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: "file_host"
// });


// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     // var query = connection.query("SELECT * FROM survey_data",function(err,res){
//     //   if(err) throw err;
//     //   console.log(res);
//     //   surveys = res;
     
    
//     // })
//   });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());






  app.post('/api/upload',upload.single('file'),function(req,res){
    console.log(req.file)

    res.json(req.file.filename);
  
})




  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

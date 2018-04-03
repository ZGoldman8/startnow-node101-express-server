// import files and packages up here
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
var data = require("./data.json");

// create your express server below
app.use(morgan("combined"));
app.use(express.static("C:\Users\Zach\oca\startnow-node101-express-server\server"));
app.get("/data", function(req, res){
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(data));
});
app.get("/", function(req, res){
    res.send("Hello Zach!");
});

// add your routes and middleware below

// finally export the express application
module.exports = app;
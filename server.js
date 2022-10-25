//jshint esversion:6
const express = require("express");

const app = express();

// localhost:3000
app.get("/", function(req, res) {
    res.send("Hello");
});


//localhost:3000/contact
app.get("/contact", function(req, res) {
    res.send("Contact me at jeanjoanis96@gmail.com");
});

//localhost:3000/about
app.get("/about", function(req, res) {
    res.send("I am Jean, a beginner at programming !");
});

// localhost:3000/hobbies
app.get("/hobbies", function(req, res){
    res.send("Video games, eat great food, sleep, spend time with my family");
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});
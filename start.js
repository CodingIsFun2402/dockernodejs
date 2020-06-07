const express = require("express");
const app = express();

var counter = 0;

app.get("/", function( req, res) {
    var message = "Anzahl Zugriffe: ";
    counter++;
    message = message + counter;
    res.send(message);
});

app.listen(3300, function() {
    console.log("app lauscht auf Port 3300");
});
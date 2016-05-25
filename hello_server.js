var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    //No string formatting in JS?
    response.send(["Hello", first, last].join(" "));
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(8800, "0.0.0.0");

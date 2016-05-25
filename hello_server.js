var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    //Interpolated strings aren't the same as string formatting, but
    //for the simple cases, they'll do.
    response.send(`Hello ${first} ${last}`);
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(8800, "0.0.0.0");

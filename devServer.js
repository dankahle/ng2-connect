
var express = require('express');

var app = express();

app.use(express.static('temp')); // for app
app.use(express.static('.')); // for node_modules and bower_components

app.get('*', function(req, res) { // for html5 routing
   res.sendFile(__dirname + '/temp/index.html');
})

app.listen(3001, function () {
   console.log('server started on 3001')
})



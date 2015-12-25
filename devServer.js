
var express = require('express');

var app = express();

app.use(express.static('temp')); // for app
app.use(express.static('.')); // for node_modules and bower_components

app.use('/api/*', function(req, res) {// api
   res.send('api');
})

app.get('*', function(req, res) { // index.html for html5 routing
   res.sendFile(__dirname + '/temp/index.html');
})

app.listen(3001, function () {
   console.log('server started on 3001')
})



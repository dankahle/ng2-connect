
/*
html5 server:
Not sure there's any nice way of doing this, i.e. there will be files requested that don't
exist that need to return 404 not index.html which is what a catchall at the end would
do, in lieu of that, then have to look for appropriate paths. This sucks as well, but
not sure any way around it really. How else do you return index.html for some paths and
404 for others?
*/
var express = require('express');

var app = express();

app.use(express.static('temp')); // for app
app.use(express.static('.')); // for node_modules and bower_components

app.use('/api/*', function(req, res) {// api
   res.send('api');
})

app.get('*', function(req, res) { // index.html for html5 routing
   var found = false;
   var acceptablePaths = ['/index.html', '/dashboard', '/inbound'];
   acceptablePaths.forEach(function(v) {
      if(req.url.toLowerCase().indexOf(v) == 0)
         found = true;
   })
   if(req.url === '/')
      found = true;
   if(found) {
      console.log('index', req.url)
      res.sendFile(__dirname + '/temp/index.html');
   }
   else {
      console.log(404, req.url);
      res.status(404).end();
   }
})

var port = 3003;
app.listen(port, function () {
   console.log('server started on ' + port)
})



var express = require('express');
var app = express();

var port = process.env.PORT || 8000;
var ip = process.env.IP || "0.0.0.0";

app.use("/css",express.static(__dirname + "/develop-env/frontend/css"));

app.settings.views = '/home/ubuntu/workspace/develop-env/frontend/views/'

console.log(__dirname);

app.get("/", (req, res) => {
  res.render('home.ejs');

});
  
app.listen(port, ip, function() {
  console.log("Chat server listening at", ip + ":" + port);
});

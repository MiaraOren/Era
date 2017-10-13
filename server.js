var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;
var ip = process.env.IP || "0.0.0.0";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/css", express.static(__dirname + "/develop-env/frontend/css"));
app.use("/js", express.static(__dirname + "/develop-env/frontend/js"));

app.settings.views = __dirname +'/develop-env/frontend/views/';

var i = 0;

app.get("/", (req, res) => {
  res.render('home.ejs');
});

app.get("/posts", (req, res) => {
  res.render('post.ejs', {counter: i});
    i+=1;
});

app.get("/comm_post", (req, res) => {
	res.json({name: "oren", time: new Date().getTime()});
});

app.listen(port, ip, function() {
  console.log("Chat server listening at", ip + ":" + port);
});

var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")
    
mongoose.connect('mongodb://localhost/auth', {
  useMongoClient: true,
});

var app = express();
app.use("/css", express.static(__dirname + "/develop-env/frontend/css"));
app.use("/js", express.static(__dirname + "/develop-env/frontend/js"));
app.settings.views = __dirname +'/develop-env/frontend/views/';

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "SDGsdfg464576yhdfh657",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============
// ROUTES
//============


app.get("/", function(req, res){
    res.render("welcome");
});


app.get("/home", isLoggedIn, function(req, res){
	// Auth Routes
	app.use("/home/get_posts", require("./posts"));
	res.render("home"); 
});


//show sign up form
app.get("/register", function(req, res){
   res.render("register"); 
});

//handling user sign up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/home");
        });
    });
});

// LOGIN ROUTES
//render login form
app.get("/login", function(req, res){
   res.render("login"); 
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}) ,function(req, res){

});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



app.listen(process.env.PORT || 8080, process.env.IP, function(){
    console.log("server started.......");
})
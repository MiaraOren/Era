const router = require('express').Router();

var i = 0;

// User Asks for more posts
router.get("/", (req, res) => {
	res.render('post.ejs', {counter: i});
    i+=1;
});


module.exports = router;

var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    username: String,
    content: String,
 	time: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Comment", commentSchema);
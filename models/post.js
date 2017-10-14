var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    username: String,
    content: String,
    time: { type: Date, default: Date.now },
    likes: Number,
    comments: []
});


module.exports = mongoose.model("Post", postSchema);
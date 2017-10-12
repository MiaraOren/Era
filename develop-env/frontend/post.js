var generatePostId = function() {
	
	time = new Date().getTime();
};


class post = {
	
	constructor(title, user, user_name, text, label, comments) {
		this.postId = generatePostId();
		this.title = title;
		this.userId = user;
		this.user_name = user_name;
		this.text = text;
		this.label = label;
		this. comments = comments;
	};

	showMe() {
		return "<div style="'border: 1px black solid'"> BLA </div>"
	}
};


export {
	post
};

var generatePostId = function() {
	
	time = new Date().getTime();
};


export class post = {
	
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


var p1 = post.create(
		"New Generation Order",
		"#@$sdfgh577Jgdv^457HYfgh",
		"Oren"
		"Hugh Hefner, the founder of Playboy magazine, has died aged 91 after a lifetime of selling not just magazines but a fantastical lifestyle.\
		 What did his sexual revolution mean for women?Much of the press coverage of Hefner\'s death has focused on the two sides to his legacy, pitting\
		 sleaziness against the way he opened American sexual attitudes.The feminist Camille Paglia called him \"one of the principal architects of the social\
	     revolution\" and Hefner himself said in 1992 that he was proud\
	     he had \"changed attitudes toward sex.\"",

		'#movies',
		
		this. comments = [

			'nfhdDhIpygD45GhujkVC42Xz' : {
				id : '',
				name : 'jaspi',
				comment : "But some feminists argue there is a third part to Hefner\'s legacy: that he built his revolution through images of women\'s bodies."
			}]
);


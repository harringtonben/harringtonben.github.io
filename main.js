var allBlogs = []

var blog1 = {
	heading: "Week 1",
	date: "7/31/2017",
	blogPost: "This was one hell of a week. I started feeling pretty good about my knowledge of Javascript, and ended feeling like I didn't have the slightest clue in the world. I am getting to a point that I understand exactly why you would do something as soon as someone shows me how they did something, but I am still having trouble just starting the process. I am hoping that doing the planning sessions will help me know where to start and execute better code in the long run."
};

var blog2 = {
	heading: "Week 2",
	date: "7/26/2017",
	blogPost: "I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. Be careful, or I will spill the beans on your placeholder text. You could see there was text coming out of her eyes, text coming out of her wherever."
};

var blog3 = {
	heading: "Week 3",
	date: "7/26/2017",
	blogPost: "I have a 10 year old son. He has words. He is so good with these words it's unbelievable. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud."
};

var blog4 = {
	heading: "Week 4",
	date: "7/26/2017",
	blogPost: "I think the only card she has is the Lorem card. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, 'I can't do it. I just can't do it. It's inappropriate. It's not nice.'"
};

var blog5 = {
	heading: "Week 5",
	date: "7/26/2017",
	blogPost: "Despite the constant negative ipsum covfefe. You could see there was text coming out of her eyes, text coming out of her wherever. That other text? Sadly, it’s no longer a 10. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you know, shot."
};

allBlogs.push(blog1)
allBlogs.push(blog2)
allBlogs.push(blog3)
allBlogs.push(blog4)
allBlogs.push(blog5)

console.log(allBlogs);

var blogContainer = document.getElementById("blog-container");

for(var i = 0; i < allBlogs.length; i++) {
	
	var currentBlog = allBlogs[i];
	var domString = "";

	domString += '<section class="blog-card">'
    domString +=    '<div class="title">'
    domString +=      '<h2>' + currentBlog.heading + '</h2>'
    domString +=      '<h4>' + currentBlog.date + '</h4>'
    domString +=    '</div>'
    domString +=    '<div class="description">'
    domString +=      '<p>' + currentBlog.blogPost + '</p>'
    domString +=    '</div>'
    domString +=  '</section>'

    blogContainer.innerHTML += domString;

}



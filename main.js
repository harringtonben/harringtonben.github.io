var allBlogs = []

var blog1 = {
	heading: "Week 1",
	date: "7/31/2017",
	blogPost: "This was one hell of a week. I started feeling pretty good about my knowledge of Javascript, and ended feeling like I didn't have the slightest clue in the world. I am getting to a point that I understand exactly why you would do something as soon as someone shows me how they did something, but I am still having trouble just starting the process. I am hoping that doing the planning sessions will help me know where to start and execute better code in the long run."
};

var blog2 = {
	heading: "JavaScript Crushes My Soul",
	date: "7/31/2017",
	blogPost: "This week on Game of Thrones, I learned that JavaScript makes me challenge my entire existance as a human and every time I feel like I am conquering a milestone the next thing that comes out of an instructors mouth just puts me right back at square one. Luckily there are 5 more months left of front end for me to feel like I have no idea what I am doing!"
};

var blog3 = {
	heading: "Group Projects",
	date: "8/5/2017",
	blogPost: "We had our first group project this week and man it was an experience! It really helped solidify the concept of relying on the people around you to accomplish tasks. We did a great job of lining out how to tackle the project and divy up the tickets to accomplish things. It also helped a lot that we were able to tackle merge conflicts together for the first time. Overall things are feeling pretty good right now!"
};

var blog4 = {
	heading: "Event Listeners",
	date: "8/15/2017",
	blogPost: "Event Listeners. Now THIS makes sense to me. It feels so good to finally be in a place where I am not googling everything that I need to do to be able to finish a project and can start from square one and get to the end of an assignment on my own for the most part."
};

var blog5 = {
	heading: "Markdown",
	date: "8/22/2017",
	blogPost: "Pretty easy week in terms of new material. Learned about markdown and making a proper readme for your Github repos and then expanded our work on event listeners with the famous WYSIWYG exercise. It was pretty intense, but I was happy that I was able to get through it!"
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



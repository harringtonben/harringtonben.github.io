
var getAllTheBlogs = new XMLHttpRequest;
getAllTheBlogs.addEventListener("load", bringMeTheBlogs);
getAllTheBlogs.addEventListener("error", whereAreTheBlogs);
getAllTheBlogs.open("GET", "blogs.json");
getAllTheBlogs.send();

function bringMeTheBlogs() {
	var blogData = JSON.parse(this.responseText).blogs;
	// console.log(blogData);
	printBlog(blogData);
} 

function whereAreTheBlogs() {
	console.log("The file doesn't work!!!")
}

var blogContainer = document.getElementById("blog-container");

function printBlog(blogs) {
	for(var i = 0; i < blogs.length; i++) {
		var domString = "";
		domString += `<section class="blog-card">
				       <div class="title">
				         <h2>${blogs[i].heading}</h2>
				         <h4>${blogs[i].date}</h4>
				       </div>
				       <div class="description">
				        <p>${blogs[i].blogPost}</p>
				       </div>
				     </section>`;

	    blogContainer.innerHTML += domString;
	}
}


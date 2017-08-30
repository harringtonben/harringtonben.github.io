
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
		domString += `<div class="col-sm-6 col-md-4">
					    <div class="thumbnail">
					      <img src="..." alt="...">
					      <div class="caption">
					        <h3>${blogs[i].heading}</h3>
					        <h4>${blogs[i].date}</h4>
					        <p class="blogdescription">${blogs[i].blogPost}</p>
					      </div>
					    </div>
					  </div>`;

	    blogContainer.innerHTML += domString;
	}
}


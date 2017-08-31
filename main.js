var searchMe = document.getElementById("searchText");
var blogs = [];

var getAllTheBlogs = new XMLHttpRequest;
getAllTheBlogs.addEventListener("load", bringMeTheBlogs);
getAllTheBlogs.addEventListener("error", whereAreTheBlogs);
getAllTheBlogs.open("GET", "blogs.json");
getAllTheBlogs.send();

function bringMeTheBlogs() {
	var blogData = JSON.parse(this.responseText).blogs;
	// console.log(blogData);
	printBlog(blogData);
	blogs = blogData;
} 

function whereAreTheBlogs() {
	console.log("The file doesn't work!!!")
}

var blogContainer = document.getElementById("blog-container");

function printBlog(blogs) {
	var blogString = ``;
	for(var i = 0; i < blogs.length; i++) {
		var domString = "";
		domString += `<div class="col-sm-6 col-md-4">
					    <div class="thumbnail">
					      <div class="caption">
					        <h3>${blogs[i].heading}</h3>
					        <h4>${blogs[i].date}</h4>
					        <p class="blogdescription">${blogs[i].blogPost}</p>
					      </div>
					    </div>
					  </div>`;
		blogString += domString;

	}
	writeToDom(blogString);
}

function writeToDom(strang) {
	blogContainer.innerHTML = strang;
}

document.body.addEventListener("click", function(event) {
	// console.log(event);
	if (event.target.parentNode.parentNode.parentNode.className === "col-sm-6 col-md-4") {
		var printMe = event.target.parentNode.parentNode.parentNode.innerHTML;
		console.log(printMe);
		printDatCard(printMe);
	} else if (event.target.className === "caption"){
		printMe = event.target.parentNode.parentNode.innerHTML;
		console.log(event);
		printDatCard(printMe);

	}
})

function printDatCard(printing) {
	var giveMetext = document.getElementById("fillme");
	giveMetext.innerHTML = printing;

}

searchMe.addEventListener('keypress', function(event) {
  // console.log("event", event.keyCode);
  if (event.key === 'Enter') {
    var txt = searchMe.value;
    console.log(txt);
    //1. filter planets array
    var results = blogs.filter(function(thing){
    	// debugger;
      // console.log('filter thing', thing);
      return thing.blogPost.indexOf(txt)>-1;
    })
    printBlog(results);
    // domString(results);
    // console.log(results);
    // console.log('you hit enter bitch', txt);
  }
})


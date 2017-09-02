let searchMe = document.getElementById("searchText");
let blogs = [];

function bringMeTheBlogs() {
	let blogData = JSON.parse(this.responseText).blogs;
	// console.log(blogData);
	printBlog(blogData);
	blogs = blogData;
} 

const whereAreTheBlogs = () => {
	console.log("The file doesn't work!!!")
}

let getAllTheBlogs = new XMLHttpRequest;
getAllTheBlogs.addEventListener("load", bringMeTheBlogs);
getAllTheBlogs.addEventListener("error", whereAreTheBlogs);
getAllTheBlogs.open("GET", "blogs.json");
getAllTheBlogs.send();

let blogContainer = document.getElementById("blog-container");

const printBlog = (blogs) => {
	var blogString = ``;
	for(let i = 0; i < blogs.length; i++) {
		let domString = "";
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
		let printMe = event.target.parentNode.parentNode.parentNode.innerHTML;
		// console.log(printMe);
		printDatCard(printMe);
	} else if (event.target.className === "caption"){
		printMe = event.target.parentNode.parentNode.innerHTML;
		// console.log(event);
		printDatCard(printMe);

	}
})

const printDatCard = (printing) => {
	let giveMetext = document.getElementById("fillme");
	giveMetext.innerHTML = printing;

}

searchMe.addEventListener('keypress', function(event) {
  // console.log("event", event.keyCode);
  if (event.key === 'Enter') {
    let txt = searchMe.value;
    // console.log(txt);
    //1. filter planets array
    let results = blogs.filter(function(thing){
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


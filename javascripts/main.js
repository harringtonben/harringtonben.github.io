"use strict";

let blogs = [];

$.ajax("/db/blogs.json").done((data)=> {
	blogs = data.blogs;
	printBlog(blogs);
}).fail((error)=> {
	console.log(error);
});

const printBlog = (blogs) => {
	var blogString = ``;
	for(let i = 0; i < blogs.length; i++) {
		let domString = "";
		domString += `<div id="blogCard" class="col-sm-6 col-md-4">
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
};

function writeToDom(strang) {
	$("#blog-container").html(strang);
}

$("body").click((event)=> {	
	if ($(event.target).hasClass("caption")) {
		printDatCard($(event.target).parent().html());
	}
});

const printDatCard = (printing) => {
	$("#fillme").html(printing);
	$("#fillme").addClass("jumbotron");
};

$("#searchText").keypress((event) => {
 if (event.key === 'Enter') {		 
	var txt = $("#searchText").val();
	let results = blogs.filter((thing)=> {
			return thing.blogPost.indexOf(txt)>-1;
	});
	printBlog(results);
 }   
});



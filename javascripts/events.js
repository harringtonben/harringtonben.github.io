"use strict";

const data = require("./data");

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
	let results = data.getBlogs().filter((thing)=> {
			return thing.blogPost.indexOf(txt)>-1;
	});
	data.printBlog(results);
 }   
});

module.exports = {};
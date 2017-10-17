(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let blogs = [];


const initializer = () => {
    $.ajax("/db/blogs.json").done((data)=> {
        blogs = data.blogs;
        printBlog(blogs);
    }).fail((error)=> {
        console.log(error);
    });
};


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

const writeToDom = (strang) => {
	$("#blog-container").html(strang);
};

const getBlogs = () => {
    return blogs;
};

module.exports = {initializer, printBlog, getBlogs};
},{}],2:[function(require,module,exports){
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
},{"./data":1}],3:[function(require,module,exports){
"use strict";

const data = require("./data");
require("./events");

$(document).ready(() => {
	data.initializer();
});





},{"./data":1,"./events":2}]},{},[3]);

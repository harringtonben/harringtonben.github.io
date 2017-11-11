"use strict";

const firebaseApi = require('./firebaseapi');

let blogs = [];

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

module.exports = { printBlog, getBlogs};
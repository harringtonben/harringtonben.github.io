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
	writeToDom(blogString, '#blog-container');
};

const printProjects = (projects) => {
	let projectString = ``;
	projects.forEach((project) => {
		projectString += `<div class="col-sm-6 col-md-4">`;
		projectString += `<div class="thumbnail projects">`;
		projectString += 		`<h2>${project.Name}</h2>`;
		projectString += 		`<div class="gif">`;
		projectString += 			`<img class="screenrecording" src="${project.GIFURL}">`;
		projectString +=		`</div>`;
		projectString +=		`<a href="${project.GitHubURL}">View this project here</a>`;
		projectString += `</div>`;
		projectString += `</div>`;
	});
	writeToDom(projectString, '#projects-container');
};

const writeToDom = (strang, element) => {
	$(element).html(strang);
};

const getBlogs = () => {
    return blogs;
};

module.exports = {printBlog, getBlogs, printProjects};
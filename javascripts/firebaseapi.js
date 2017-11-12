'use strict';

const data = require('./data');
let firebaseKey = '';

const setKey = (key) => {
    firebaseKey = key;
    callBlogs();
    callProjects();
};

const getBlogs = () => {
    let myBlogs = [];
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((blogs) => {
            if (blogs != null) {
                Object.keys(blogs).forEach((key) => {
                    blogs[key].id = key;
                    myBlogs.push(blogs[key]);
                });
            }
            resolve(myBlogs);
        }).catch((error) => {
            reject(error);
        });
    });
};

const getProjects = () => {
    let myProjects = [];
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/projects.json`).then((projects) => {
            if (projects != null) {
                Object.keys(projects).forEach((key) => {
                    projects[key].id = key;
                    myProjects.push(projects[key]);
                });
            }
            resolve(myProjects);
        }).catch((error) => {
            resolve(error);
        });
    });
};

const callBlogs = () => {
	getBlogs().then((results) => {
		data.printBlog(results);
	}).catch((error) => {
		console.log('error in getting blogs: ', error);
	});
};

const callProjects = () => {
    getProjects().then((results) => {
        data.printProjects(results);
    }).catch((error) => {
        console.log('error in getting projects', error);
    });
};

module.exports = {setKey};
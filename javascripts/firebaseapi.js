'use strict';

const data = require('./data');
let firebaseKey = '';

const setKey = (key) => {
    firebaseKey = key;
    callBlogs();
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

const callBlogs = () => {
	getBlogs().then((results) => {
		console.log(results);
		data.printBlog(results);
	}).catch((error) => {
		console.log('error in getting blogs: ', error);
	});
};

module.exports = {setKey, getBlogs};
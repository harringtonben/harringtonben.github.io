(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

let firebaseApi = require('./firebaseApi');
let data = require('./data');

const apiKeys = () => {
    return new Promise((resolve, reject) => {
        $.ajax('./db/apiKeys.json').done((data) => {
            resolve(data.firebaseKeys);
        }).fail((error) => {
            reject(error);
        });
    });
};

const retrieveKeys = () => {
    apiKeys().then((results) => {
        firebaseApi.setKey(results);
        firebase.initializeApp(results);
    }).catch((error) => {
        console.log('error in retrieve keys', error);
    });
};

module.exports = {retrieveKeys};
},{"./data":2,"./firebaseApi":4}],2:[function(require,module,exports){
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
},{"./firebaseapi":5}],3:[function(require,module,exports){
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
},{"./data":2}],4:[function(require,module,exports){
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
},{"./data":2}],5:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"./data":2,"dup":4}],6:[function(require,module,exports){
"use strict";

const data = require("./data");
const apiKeys = require('./apiKeys');
require("./events");

$(document).ready(() => {
	apiKeys.retrieveKeys();
});





},{"./apiKeys":1,"./data":2,"./events":3}]},{},[6]);

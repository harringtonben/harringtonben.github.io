'use strict';

app.service("DatabaseService", function($http, $q, FIREBASE_CONFIG) {
    
    const getBlogs = () => {
        let myBlogs = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => {
                let blogs = results.data;
                if (blogs != null) {
                    Object.keys(blogs).forEach((key) => {
                        blogs[key].id = key;
                        myBlogs.push(blogs[key]);
                    });    
                }
                resolve(myBlogs);
            }).catch((error) => {
                console.log("error in database getBlogs", error);
            });
        });
    };
    
    return {getBlogs};
});
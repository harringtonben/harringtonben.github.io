'use strict';

app.controller("BlogCtrl", function($scope, DatabaseService) {
    const getBlogs = () => {
        DatabaseService.getBlogs().then((results) => {
            $scope.blogs = results;
        }).catch((error) => {
            console.log("Error in getBlogs", error);
        });
    };

    getBlogs();
});
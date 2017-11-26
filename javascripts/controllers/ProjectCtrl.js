'use strict';

app.controller("ProjectCtrl", function($scope, DatabaseService) {

    const getProjects = () => {
        DatabaseService.getProjects().then((results) => {
            $scope.projects = results;
        }).catch((error) => {
            console.log("Error in getProjects", error);
        });
    };
   
    getProjects();
});
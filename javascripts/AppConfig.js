'use strict';


app.config(function($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: 'partials/about.html',
        
        })
        .when("/blog", {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl'
        })
        .when("/projects", {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectCtrl'
        })
        .when("/contact", {
            templateUrl: 'partials/contact.html'
        })
        .otherwise('/about');
});
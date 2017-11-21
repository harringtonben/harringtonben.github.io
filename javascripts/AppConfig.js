'use strict';

app.run(function() {

});

app.config(function($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: 'partials/blog.html'
        })
        .when("/blog", {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl.js'
        })
        .when("/projects", {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectCtrl.js'
        })
        .when("/contact", {
            templateUrl: 'partials/contact.html'
        })
        .otherwise('/about');
});
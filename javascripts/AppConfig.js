'use strict';


app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

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
        .otherwise('/about');
});
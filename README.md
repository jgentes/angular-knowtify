# Angular support for Knowtify InBox (http://www.knowtify.io/)

## How do I use it?

Follow these steps:

1) Add the service to your Angular app module:

```
var app = angular.module('myapp', ['knowtify']) {
    ...
});
```


2) Inject the Knowtify service into your controller:

```
function myCtrl($rootScope, $scope, $http, knowtify) {
    ...
};
```

3) Call any method documented here: http://api.knowtify.io/docs/sending-alerts-to-inbox

```
segmentio.identify($scope.user.id, {
  name: $scope.user.name,
  email: $scope.user.email
});
```      

## How-to add it to your project?

Via Twitter Bower (http://bower.io/) 
Run ``bower install angular-knowtify`` in a terminal

## How-to build / develop it?

1) Install dependencies via npm: ``npm install``(in the project folder)

2) Install dependencies via bower: ``bower install``(in the project folder)

2) Run grunt: ``grunt`` or ``grunt uglify``

3) The build result is in the build directory


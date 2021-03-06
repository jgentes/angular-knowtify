# Angular support for Knowtify InBox (http://www.knowtify.io/)

### Note: For Node users, you should also use https://www.npmjs.com/package/knowtify-node for Knowtify Emails support.

## How do I use it?

Follow these steps:

1) Install via Bower (http://bower.io/) 

Run ``bower install angular-knowtify`` in a terminal


2) Add the Knowtify script to your app HTML page. *Be sure to add your public API token here.*

```
<script type="text/javascript">
    var _knowtify = _knowtify || [];
    var _knowtifyInbox = _knowtifyInbox || [];
    _knowtify.public_token = "YOUR_PUBLIC_TOKEN_HERE";
 
    (function(d,s,t,u){var j = d.createElement(s);var p = d.getElementsByTagName(s)[0];
        j.type = t;j.async = true;j.src = u;p.parentNode.insertBefore(j, p);})(document,'script','text/javascript', 'https://s3.amazonaws.com/js.knowtify.io/knowtify.js');
</script>
```


3) Add the bower module to your app:

```
<script src="/bower_components/angular-knowtify/dist/angular-knowtify.min.js"></script>
```


4) Add the service to your Angular app module:

```
var app = angular.module('myapp', ['knowtify']) {
    ...
});
```


5) Inject the Knowtify service into your controller:

```
function myCtrl($rootScope, $scope, $http, knowtify) {
    ...
};
```


6) Add the CSS ID of the Inbox element as ``YOUR_BUTTON_ID`` (no # prefix) in your controller, along with the email and unique ID of the user, and push it to Knowtify. This initializes the button that your user will interact with. *Review http://api.knowtify.io/docs/get-started-with-inbox for more information.*

```
knowtify.push(['load_inbox', 'YOUR_BUTTON_ID', {email: "REQUIRED", id: "REQUIRED" }]);
```


7) Call knowtify.push or knowtify.inbox.push to send notifications using events, behavioral data, scheduled announcements, or manual updates:  

```
knowtify.push(['event', 'testing', {
    id: 123,
    email: "yourname@gmail.com"
}])
```      

or

```
knowtify.inbox.push(['message', {
    id: "123",
    heading: "Message heading",
    description: "Message description...",
    image: "https://s3.amazonaws.com/knowtify_web/_img/inbox_profile.png",
    url: "http://google.com",
    created_at: timestamp
}])
```    


### Note that if you are creating users via Node using 'upsert', then the 'id' must be under "data", not next to 'email' like in the JS API. See https://knowtify.readme.io/discuss/56018ae68fcf8d230053c8d8

### Problems? Submit an issue here: https://github.com/jgentes/angular-knowtify/issues

## Want to help with this package?

1) Install dependencies via npm: ``npm install``(in the project folder)

2) Install dependencies via bower: ``bower install``(in the project folder)

2) Run grunt: ``grunt`` or ``grunt uglify``

3) The build result is in the dist directory


#### Props go to Dave Kuhn (https://github.com/kuhnza) for his angular-mixpanel repo on which this was based. 
(function(){

  app = angular.module('decorators', []);

  app.controller('videoCtrl', ['$scope', function($scope){
    $scope.messages = [];
    $scope.handlePause = function(evt) {
      console.log(evt);
      $scope.messages.push({text: '' + evt});
    }
  }]);

  // Control video via directives
  app.directive('spacebarSupport', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $('body').on('keypress', function(event){
          var videoEl = element[0];
          if(event.keyCode === 32) {
            if(videoEl.paused) {
              videoEl.play();
            } else {
              videoEl.pause();
            }
          }
        });
      }
    }
  });

  // Angular service $parse will lookup for the string in the parent and try
  // to find the function. It will return a reference to that function
  app.directive('eventPause', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        // get the string passed in the event-pause directive and
        // now we have the function and it will be totally decoupled
        var fn = $parse(attrs.eventPause);
        el.on('pause', function(event) {
          // console.log(event);
          obj = {text: 'text here', evt: event};
          scope.$apply(function() {
            console.log(fn);
            fn(scope, obj);
          });
        });
      }
    };
  })
;








}());

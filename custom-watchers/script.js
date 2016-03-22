(function(){

  var app = angular.module('app', []);

  app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.size = 150;
  }]);

  app.directive('fontScale', function() {
    return {
      link: function(scope, el, attrs) {
        scope.$watch(attrs['fontScale'], function(newVal, oldVal){
          el.css('font-size', newVal + '%');
        });
      }
    }
  })


}());

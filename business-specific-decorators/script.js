(function(){

  "use strict";

  var app = angular.module('app', []);


  app.controller('businessCtrl',['$scope', function($scope) {
    $scope.user1 = { name: 'Bruno Paulino', selected: true };
  }]);

  app.directive('userTile', function() {
    return {
      restrict: 'E',
      scope: {
        user: '='
      },
      templateUrl: 'userTile.html'
    };
  });

  app.directive('userClickSelect', function() {
    return {
      link: function(scope, el, attrs) {
        el.on('click', function() {
          console.log(scope.user.selected);
          scope.user.selected = !scope.user.selected;
          scope.$apply();
        });
      }
    }
  })

}());

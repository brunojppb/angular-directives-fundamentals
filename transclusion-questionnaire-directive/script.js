(function(){

  var app = angular.module('app', []);

  app.controller('mainCtrl', ['$scope', function($scope) {
    // My logic here
    $scope.answers = {baseLocation: 'Esplanada II'};
  }]);

  app.directive('myQuestion', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'myQuestion.html',
      scope: {
        questionText: '@q'
      },
      controller: function($scope) {
      }
    }
  });

}());

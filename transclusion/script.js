(function(){

  var app = angular.module('app', []);

  app.controller('mainCtrl', ['$scope', function($scope) {
    // My logic here
    $scope.message = "This is a message coming from the mainCtrl";
  }]);

  app.directive('displayBox', function() {
    return {
      restrict: 'E',
      templateUrl: 'displayBox.html',
      scope: true,
      controller: function($scope) {
        $scope.hidden = false;
        $scope.close = function() {
          $scope.hidden = true;
        };
        console.log('Msg: ' + $scope.message);
        $scope.message = 'injecting inside the directive controller';
      },
      transclude: true
    }
  })

}());

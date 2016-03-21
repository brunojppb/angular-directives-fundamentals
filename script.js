(function(){

  "use strict";

  angular.module("app", []);

  angular
    .module("app")
    .controller('mainCtrl', ['$scope', '$log', function($scope, $log){
      $log.info('Ok! Angular running!');
    }]);

}());

(function(){

  "use strict";

  angular.module("app", []);

  angular
    .module("app")
    .controller('mainCtrl', ['$scope', '$log', function($scope, $log){
      $log.info('Ok! Angular running!');

      $scope.user = {
        name: 'Bruno Paulino',
        address: {
          street: 'Rua Jose Simoes de Araujo',
          city: 'João Pessoa',
          planet: 'Earth'
        },
        friends: [
          'Jean',
          'Victor',
          'Rhaisa',
          'Lele'
        ]
      }

    }]);

    // My first directive
    angular
      .module('app')
      .directive('userInfoCard', function() {
        return {
          templateUrl: 'userInfoCard.html',
          restrict: 'E'
        };
      });

}());

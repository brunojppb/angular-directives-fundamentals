(function(){

  "use strict";

  angular.module("app", []);

  angular
    .module("app")
    .controller('mainCtrl', ['$scope', '$log', function($scope, $log){
      $log.info('Ok! Angular running!');

      $scope.user1 = {
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
      };

      $scope.user2 = {
        name: 'Flavio Augusto',
        address: {
          street: 'West University Blvd',
          city: 'Orlando',
          planet: 'USA'
        },
        friends: [
          'Bruno',
          'Victor',
          'Jean',
          'Danilo'
        ]
      };

      console.log($scope);

    }]);

    // My first directive
    angular
      .module('app')
      .directive('userInfoCard', function() {
        return {
          templateUrl: 'userInfoCard.html',
          restrict: 'E',
          scope: {
            user: '=',
          },
          controller: function($scope) {
            $scope.knightMe = function(user) {
              user.rank = 'Knight';
            };

            console.log($scope);
          }
        };
      });

}());

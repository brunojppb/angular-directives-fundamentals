(function() {

  "use strict";

  angular.module("app", []);

  angular
    .module("app")
    .controller('mainCtrl', ['$scope', '$log', function($scope, $log) {
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
        ],
        level: 1
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
        ],
        level: 2
      };

      $scope.droid1 = {
        name: 'R2-D2',
        specifications: {
          manufacturer: 'Industrial Automaton',
          type: 'Astromech',
          productLine: 'R2 series'
        },
        level: 2
      };

      console.log($scope);

    }]);

  // User directive
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

          $scope.removeFriend = function(friend) {
            var index = $scope.user.friends.indexOf(friend);
            if (index > -1) {
              $scope.user.friends.splice(index, 1);
            }
          }
        }
      };
    });

  // User directive
  angular
    .module('app')
    .directive('droidInfoCard', function() {
      return {
        templateUrl: 'droidInfoCard.html',
        restrict: 'E',
        scope: {
          droid: '=',
        },
        controller: function($scope) {
        }
      };
    });

    angular.module('app').directive('userPanel', function() {
      return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'userPanel.html',
        scope: {
          // @ means one-way binding
          name: '@',
          // = indicates two-way binding, so this can be changed
          level: '=',
          initialCollapsed: '@collapsed'
        },
        controller: function($scope) {
          $scope.nextState = function() {
            console.log('Level: ' + $scope.level);
            $scope.level++;
            $scope.level = $scope.level % 4;
          }
        }
      }
    });

  angular.module('app').directive('stateDisplay', function() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        var params = attrs['stateDisplay'].split(' ');
        var linkVar = params[0];
        var classes = params.slice(1);

        scope.$watch(linkVar, function(newVal, oldVal) {
          // Get the color based on the level passed in
          // +1 because we need to get the next color in the
          // params array. Remember, the first element in the
          // array is the variable to watch the state
          el.removeClass(classes.join(' '));
          el.addClass(classes[newVal]);
        });
      }
    }
  });

  angular
    .module('app')
    .directive('address', function() {
      return {
        restrict: 'E',
        scope: true,
        templateUrl: 'address.html',
        controller: function($scope, $log) {
          $scope.collapsed = false;
          $scope.colapseAddress = function() {
            $scope.collapsed = !$scope.collapsed;
          };
        }
      }
    });

  angular
    .module('app')
    .directive('removeFriend', function() {
      return {
        restrict: 'E',
        scope: {
          notifyParent: '&method'
        },
        templateUrl: 'removeFriend.html',
        controller: function($scope) {
          $scope.removing = false;

          $scope.startRemove = function() {
            $scope.removing = true;
          }

          $scope.cancelRemove = function() {
            $scope.removing = false;
          }

          $scope.confirmRemove = function() {
            $scope.notifyParent();
          }

        }
      };
    })









}());

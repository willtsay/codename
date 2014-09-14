angular.module('notSetApp')
  .controller('notSetCtrl', ['$scope', '$timeout', notSetCtrl])

  function notSetCtrl($scope, $timeout){
    $scope.hi = "hello world"
  }
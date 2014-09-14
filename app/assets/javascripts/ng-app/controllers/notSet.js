angular.module('notSetApp')
  .controller('notSetCtrl', ['$scope', notSetCtrl])

  function notSetCtrl($scope){
    $scope.hi = "hello world"
  }
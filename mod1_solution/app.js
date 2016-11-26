(function (){
  'use strict';
  var ss;
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.lunchList = "";
  $scope.checkMessage = "";
  $scope.style = "";
  $scope.checkLunch = function(){
  var message = messageCheck($scope.lunchList);
  $scope.checkMessage = message;
  $scope.style= {color:ss};
  };

}
  function messageCheck(list){
    if(list === ""){
      ss = 'red';
      return "Please fill data first";}
    else {
    var arrayLunch = list.split(',');
    if(arrayLunch.length>3){
      ss = 'green';
      return "Too much!";
    }
    else {ss = 'green';
      return "Enjoy!";}
  }
  };




})();

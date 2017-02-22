'use strict';

/**
 * @ngdoc function
 * @name angularAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAssignmentApp
 */
  angular.module('angularAssignmentApp')
    .controller('MainCtrl', function() {
        var vm = this;
        vm.update = function(amount) {
              var hundred, fifty, twenty, ten, five, two, one;
              var changeArray = [hundred, fifty, twenty, ten, five, two, one];
              var amtArray = [100, 50, 20, 10, 5, 2, 1];
              if (amount) {
                  $("span").each(function(i) {
                      var currentText = $(this).text();
                          $(this).text(currentText + parseInt(amount / amtArray[i]));
                          amount = amount % amtArray[i];
                  });
              } else {
                  $("span").each(function(i) {
                      $(this).text("");
                  });
              }
        };
        vm.clear = function() {
            vm.amount = null;
            $("span").each(function(i) {
                $(this).text("");
            });
        };
    });

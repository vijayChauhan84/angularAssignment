'use strict';

/**
 * @ngdoc function
 * @name angularAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAssignmentApp
 */
  angular.module('angularAssignmentApp')
    .controller('LimitedCtrl', function() {
        var vm = this;
        var currDenom = [1, 2, 5, 10, 20, 50, 100];
        var currNo = [10,10,10,10,10,10,10];
        var count = [0,0,0,0,0,0,0];
        var totalCorpus = 0;

        vm.calcTotalCorpus = function() {
            for (var i = 0; i < currDenom.length; i++) {
                totalCorpus = totalCorpus + currDenom[i] * currNo[i];
            }
        };

        vm.update = function(amount) {
            vm.calcTotalCorpus();
            vm.withdrawCash(amount);
        };

        vm.withdrawCash = function(amount) {
            if (amount <= totalCorpus) {
            for (var i = currDenom.length-1; i >= 0; i--) {
                if (currDenom[i] <= amount) {//If the amount is less than the currDenom[i] then that particular denomination cannot be dispensed
                    var noteCount = parseInt(amount / currDenom[i]);
                    if (currNo[i] > 0) {//To check whether the ATM Vault is left with the currency denomination under iteration
                        //If the Note Count is greater than the number of notes in ATM vault for that particular denomination then utilize all of them
                        count[i] = noteCount >= currNo[i] ? currNo[i] : noteCount;
                        currNo[i] = noteCount >= currNo[i] ? 0 : currNo[i] - noteCount;
                        //Deduct the total corpus left in the ATM Vault with the cash being dispensed in this iteration
                        totalCorpus = totalCorpus - (count[i] * currDenom[i]);
                        //Calculate the amount that need to be addressed in the next iterations
                        amount = amount - (count[i] * currDenom[i]);
                    }
                }
            }
            vm.displayNotes();
            vm.displayLeftNotes();

            } else {
                console.log("Unable to dispense cash at this moment for this big amount");
            }
        };

        vm.displayNotes = function() {
            $("span").each(function(i) {
                if (count[i] != 0) {
                    $(this).text(currDenom[i] + " * " + count[i] + " = " + (currDenom[i] * count[i]));
                }
            });
        };

        vm.displayLeftNotes = function() {
            for (var i = 0; i < currDenom.length; i++) {
                //console.log("Notes of " + currDenom[i] + " left are " + currNo[i]);
                $( "ul li" ).text(function( i ) {
                  return ("Notes of " + currDenom[i] + " left are " + currNo[i]);
                });
            }
        };

        vm.clear = function() {
            vm.amount = null;
            $("span").each(function(i) {
                $(this).text("");
            });

            totalCorpus = 0;
            currDenom = [1, 2, 5, 10, 20, 50, 100];
            currNo = [10,10,10,10,10,10,10];
            count = [0,0,0,0,0,0,0];
            for (var i = 0; i < currDenom.length; i++) {
                $( "ul li" ).text(function( i ) {
                  return ("Notes of " + currDenom[i] + " left are " + currNo[i]);
                });
            }
        };
    });

angular.module('QuestionAdminCtrl', [])
  .controller('questionAdminCtrl', ['$scope', '$rootScope', 'admin', function($scope, $rootScope, admin) {

    function init() {
      // get admin questions
      $scope.adminQuestions = function() {
        admin.getQuestions().then(function(data) {
          console.log(data);
          $scope.questions = data;
        }, function(rejected) {
          console.log("Reason for rejection: " + rejected);
        });
      };
    }

    init();

  }]);

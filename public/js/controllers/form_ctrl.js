angular.module('FormController', [])
  .controller('formCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {

    $scope.prefs = {}; // object to contain user preferences

    // CLIMBING VARS
    $scope.climb = "50"; // set default value

    // STABILITY VARS
    $scope.stability = "50"; // set default value;

    // add scope and technical prowess
    $scope.technical = "50"; // set default value

    // set default value for question picker
    $scope.question = 1;

    // set default visited value
    $scope.visited = false;

    // set the question when clicked
    $scope.setQuestion = function(questionId) {
      $scope.question = questionId;

      $scope.results = false;
    };

    // returns the id when selected
    $scope.isSet = function (questionId) {
      return $scope.question === questionId;
    };

    $scope.submit = function() {
      // add value
      $scope.prefs.climb = $scope.climb;
      $scope.prefs.stability = $scope.stability;
      $scope.prefs.technical = $scope.technical;

      $scope.question = null; // set question value to null, hide all questions

      $scope.$emit('preferenceEmit', {prefs: $scope.prefs})

      //console.log($scope.prefs);
      $location.path('/results'); // go to the results page
    };

    // conditional to determine the users asc/desc preferences
    // watches the $scope.climb ng-model to update the values as the user changes their preference values
    $scope.$watch("climb", function(newValue, oldValue) {
      if ($scope.climb > 66) {
        $scope.strengths = "Climbing";
      }
      else if ($scope.climb <= 33) {
        $scope.strengths = "Descending";
      }
      else {
        $scope.strengths = "Both climbing and descending";
      }
    });

    // watches the $scope.stability ng-model to update the user values as they change their preferences
    $scope.$watch("stability", function() {
      if ($scope.stability < 33) {
        $scope.stablePrefs = "A bike that holds the line you choose, nimble and quick handling";
      }
      else if ($scope.stability > 66) {
        $scope.stablePrefs = "A bike that you will feel comfortable and confident on.";
      }
      else {
        $scope.stablePrefs = "Feels good and balanced under your feet";
      }
    });

    // watches $scope.technical to update when user does.
    $scope.$watch("technical", function() {
      if ($scope.technical < 33) {
        $scope.techPrefs = "Fire roads, gravel, moderate single-track. Expected rides not terribly technical.";
      }
      else if ($scope.technical > 66) {
        $scope.techPrefs = "Roots, rocks, steep climbs and descents, jumps. Expected rides will be gnar.";
      }
      else {
        $scope.techPrefs = "A good all-rounder";
      }
    });

  }]);

  // KEY

  // CLIMB_FACTOR ////////////////

  // DH = Downhill Oriented
  // Trail = 50/50 - trail bike
  // XC = Uphill Oriented

  // GEOMETRY ////////////////

  // CASUAL = Not Technical - headtube angle not dependent
  // MED = Somewhat technical
  // AGGRESSIVE = VERY TECHNICAL

  // WHEEL BASE ///////////////

  // EXPERIENCED = Short wheel base - nimble
  // INTERMEDIATE = Medium length wheel base
  // BEGINNER = Long wheel base - stable and sturdy

  // dh + casual + experienced =
  // dh + casual + intermediate =
  // dh + casual + beginner =

  // dh + med + experienced =
  // dh + med + intermediate =
  // dh + med + beginner =

  // dh + aggressive + experienced =
  // dh + aggressive + intermediate =
  // dh + aggressive + beginner =

  ////////////////////////////////////

  // trail + casual + experienced =
  // trail + casual + intermediate =
  // trail + casual + beginner =

  // trail + med + experienced =
  // trail + med + intermediate =
  // trail + med + beginner =

  // trail + aggressive + experienced =
  // trail + aggressive + intermediate =
  // trail + aggressive + beginner =

  ////////////////////////////////////

  // xc + casual + experienced =
  // xc + casual + intermediate =
  // xc + casual + beginner =

  // xc + med + experienced =
  // xc + med + intermediate =
  // xc + med + beginner =

  // xc + aggressive + experienced =
  // xc + aggressive + intermediate =
  // xc + aggressive + beginner =

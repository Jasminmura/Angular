angular.module('photoApp', [])
  .controller('PhotoController', function ($scope, $http) {
    $scope.photos = [];

    // Fetch 20 random photos from "https://picsum.photos"
    for (let i = 0; i < 20; i++) {
      $scope.photos.push({
        id: i + 1,
        url: `https://picsum.photos/300?random=${i + 1}`
      });
    }

    $scope.enlargePhoto = function (photo) {
      $scope.enlargedPhoto = photo;
    };

    $scope.closeEnlarged = function () {
      $scope.enlargedPhoto = null;
    };
  });

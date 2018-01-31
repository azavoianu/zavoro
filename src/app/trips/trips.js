angular.module( 'zavo.trips', [
  'ui.router',
  'ui.bootstrap'
])

.controller( 'tripsCtrl', function TripsCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;

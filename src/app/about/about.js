angular.module( 'zavo.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.controller( 'aboutCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;

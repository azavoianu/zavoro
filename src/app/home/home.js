/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'zavo.home', [
  'ui.router',
  'plusOne'
])

/**
 * And of course we define a controller for our route.
 */
.controller( 'homeCtrl', function HomeController( $scope ) {

    $scope.cards = [{
        no: 1,
        img: 'assets/big2.jpg',
        headline: "How to gather flowers and also look beautiful.",
        date: 1517394189
    },{
        no: 2,
        img: 'assets/big1.jpg',
        headline: "Hai ca te chinueste frumusetea!",
        date: 1517394189
    },{
        no: 3,
        img: 'assets/big3.jpg',
        headline: "Sa alergam ca nebunii prin nisip si apa.. weeee.",
        date: 1517394189
    },{
        no: 4,
        img: 'assets/big4.jpg',
        headline: 'O sa devin un astronaut... neah.. poate o sa servesc la kfc.',
        date: 1517394189
    },{
        no: 5,
        img: 'assets/big5.jpg',
        headline: "Ne ranjim cu totii ca fraierii la camera.",
        date: 1517394189
    }];

    console.log("Intra in asta", $scope.cards);
});


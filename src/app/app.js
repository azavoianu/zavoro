angular.module( 'zavo', [
  'templates-app',
  'templates-common',
  'zavo.home',
  'zavo.about',
  'ngRoute'
])

.run( function run () {
})

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', { templateUrl: 'home/home.tpl.html', controller: 'homeCtrl' });
    $routeProvider.when('/about', { templateUrl: 'about/about.tpl.html', controller: 'aboutCtrl' });
    $routeProvider.when('/home', { templateUrl: 'home/home.tpl.html', controller: 'homeCtrl' });
    
    $routeProvider.otherwise({
      redirectTo: '/404'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

  }])

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
});


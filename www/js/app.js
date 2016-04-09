angular.module('app1', [
  'ionic',
  'nvd3',
  'nvChart',
  'app1.controllers',
  'app1.services',
  'app1.filters',
  'app1.directives'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.myStocks', {
      url: "/my-stocks",
      views: {
        'menuContent': {
          templateUrl: "templates/my-stocks.html",
          controller: 'MyStocksCtrl'
        }
      }
    })

    .state('app.stock', {
      url: "/:stockTicker",
      views: {
        'menuContent': {
          templateUrl: "templates/stock.html",
          controller: 'StockCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/my-stocks');
});

angular.module('app1.controllers', [
    'ionic'
  ])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    }
  })

  .controller('MyStocksCtrl', ['$scope',
    function ($scope) {
      $scope.myStocksArray = [
        {ticker: "AAPL"},
        {ticker: "GPRO"},
        {ticker: "FB"},
        {ticker: "NFLX"},
        {ticker: "TSLA"},
        {ticker: "BRK-A"},
        {ticker: "INTC"},
        {ticker: "MSFT"},
        {ticker: "GE"},
        {ticker: "C"},
        {ticker: "T"},
        {ticker: "A"}
      ]
      ;
    }])

  .controller('StockCtrl',
    ['$scope', '$stateParams', 'stockDataService',
      function($scope, $stateParams, stockDataService) {

        //http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail
        //$http.get("http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail")
        //  .then(function(jsonData){
        //    console.log(jsonData.data.list.resources[0].resource.fields);
        //
        //  });


        $scope.ticker = $stateParams.stockTicker;

        var promise = stockDataService.getPriceData($scope.ticker);
    promise.then(function(data){
      console.log(data)

    })



        ////  Yahoo YQL Query — http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo/*.finance.quotes%20where%20symbol%20IN%20(%22YHOO%22)&format=json&env=http://datatables.org/alltables.env
        //Yahoo Static Charts Query — http://chart.finance.yahoo.com/z?s=YHOO&t=1d&q=l&l=on&z=m&a=vm*/
      }]);

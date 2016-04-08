angular.module('app1.services', [])
  .factory('stockDataService', function ($q, $http) {
    var getDetailsData = function(ticker){

      var deferred = $q.defer(),
        url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22" + ticker + "%22)&format=json&env=http://datatables.org/alltables.env"
console.log(url);
      $http.get(url)
        .success(function(json) {
          var jsonData = json.query.results.quote;

          deferred.resolve(jsonData)
        })
        .error(function(error){
          console.log(error);
          deferred.reject();

        });
      return deferred.promise;
    };

    var getPriceData = function(ticker) {
      var deferred = $q.defer(),
        url = "http://finance.yahoo.com/webservice/v1/symbols/" + ticker + "/quote?format=json&view=detail"

      $http.get(url)
        .success(function (json) {
          var jsonData = json.list.resources[0].resource.fields;

          deferred.resolve(jsonData);
        })
   .error(function(error){
        console.log("price data error: " + error);
        deferred.reject();

      })
return deferred.promise;
    };
    return {

      getPriceData: getPriceData,
      getDetailsData: getDetailsData

    };
  })

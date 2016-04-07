angular.module('app1.services', [])
  .factory('stockDataService', function ($q, $http) {
    var getPriceData = function(ticker) {
      var deferred = $q.defer(),
        url = "http://finance.yahoo.com/webservice/v1/symbols/" + ticker + "/quote?format=json&view=detail"

      $http.get(url)
        .success(function (json) {
          var jsonData = json.list.resources[0].resource.fields;

          deferred.resolve(jsonData)
        })
   .error(function(error){
        console.log("price data error: " + error);
        deferred.reject();

      });
return deferred.promise;
    };
    return {

      getPriceData: getPriceData

    };
  })
;

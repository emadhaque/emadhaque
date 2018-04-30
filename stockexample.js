
  var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;

  var yourApiKey = 'demo';
  var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);

  alphaVantageAPI.getIntradayData('AAPL', '15min')
   .then(function intradayData(){
       console.log("Intraday data:");
       console.log(intradayData);
   })
   .catch(function err() {
       console.error(err);
   });

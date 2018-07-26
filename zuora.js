const request = require('request')
var sendSlackMessage = require("./main.js")
const zuoraApi = {
  host: process.env.ZUORA_API_HOST,
  client_id: process.env.ZUORA_API_CLIENTID,
  client_secret: process.env.ZUORA_API_CLIENTSECRET,
}


var zuoraAccessToken

var  getToken = function(zuoraCallAPI){

  var options = { method: 'POST',
    url:zuoraApi.host + 'oauth/token',
    headers: 
     { 'cache-control': 'no-cache',
       'content-type': 'application/x-www-form-urlencoded' },
    form: 
     { client_id: zuoraApi.client_id,
       client_secret: zuoraApi.client_secret,
       grant_type: 'client_credentials' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var data = JSON.parse(body);
    zuoraAccessToken = data.access_token;

    zuoraCallAPI(response);
  });
}

var doRequest = function(callback, met, apiPath, json, body, header){
    var options = { method: met,
    url:zuoraApi.host + apiPath,
    headers: { 'cache-control': 'max-age=600', 'content-type': 'application/json', authorization: 'Bearer ' + zuoraAccessToken },
    body:body,
    json:json};
    if(header){
      options.headers['zuora-version'] = header['zuora-version'];
    }

  
    request(options, function (error, response, body) {
      var data = (json)?body:JSON.parse(body);
      callback(data)
    })
}


 const zuoraRequest = (callback, method, apiPath, json, body, header) => {
  getToken(function(){
    doRequest(callback, method, apiPath, json, body, header)

  })
}




module.exports = { zuoraRequest }
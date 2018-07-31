var sendSlackMessage = require("./main.js")
const zuoraRequest = require("./zuora.js")

var valideResponse= function (response){
    console.log(response)
  if (!response.sucess) {
    sendSlackMessage.sendMessageError(response.reasons[0].message);
  }
  }

zuoraRequest.zuoraRequest(valideResponse, 'GET','v1/orders/',true)






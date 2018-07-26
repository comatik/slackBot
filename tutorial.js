const math = require('mathjs')
var sendSlackMessage = require("./main.js");

try {
    math.log(1000, a)
} catch (error) {
    
sendSlackMessage.sendMessageError(error);    
}

const math = require('mathjs')
const isNumber = require('is-number');
const { IncomingWebhook, WebClient } = require('@slack/client');
const currentDir  = require('current-dir');
const mydate = require('current-date');
const path = require('path');

const packageInfo = require('./package.json');
const web = new WebClient(process.env.SLACK_TOKEN);
const Notification = new IncomingWebhook('https://hooks.slack.com/services/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');
 path2 = currentDir();
 currentDate = mydate();


function sendMessageError(error) {
    console.log(error);
    Notification.send(`
    ********* *${currentDate}* *********
    _An error has been catch, here's some information about it_
    *the current folder is   :* ${path2}
    *The project's name is   :* ${packageInfo.name}
    *version                 :* ${packageInfo.version}
    *The current error is    :* ${error}` 
    )
 } 

 function sendMessageSucess(){

 }

 function  sendCustomMessage(message){

 }


 
 module.exports.sendMessageError = sendMessageError;  

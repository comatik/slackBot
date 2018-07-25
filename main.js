const math = require('mathjs')
const isNumber = require('is-number');
const { IncomingWebhook, WebClient } = require('@slack/client');
const currentDir  = require('current-dir');
const mydate = require('current-date');
const path = require('path');
const packageInfo = require('./package.json');
const web = new WebClient(process.env.SLACK_TOKEN);
const Notification = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
 path2 = currentDir();
 currentDate = mydate();

 function sendMessageError(error) {
    Notification.send(`
    ********* *${currentDate}* *********
    _An error has been catch, here's some information about that_
    *the current folder is   :* ${path2}
    *The project's name is   :* ${packageInfo.name}
    *version                 :* ${packageInfo.version}
    *The current error is    :* ${error}` 
    )
 } 
 
 module.exports.sendMessageError = sendMessageError;  

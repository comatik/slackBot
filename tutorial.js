const math = require('mathjs')
const isNumber = require('is-number');
const { IncomingWebhook, WebClient } = require('@slack/client');
var currentDir  = require('current-dir');
var mydate = require('current-date');
var path = require('path');
var packageInfo = require('./package.json');

const web = new WebClient(process.env.SLACK_TOKEN);
const Notification = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

try {
 test = math.log(1000, a)
 if (isNumber(test)) {
    Notification.send(`*The current result is : * _${test}_`, (error, resp) => {
        if (error) {
          return console.error(error);
        }
      });
 }
} catch (error) {
    path2 = currentDir();
    currentDate = mydate();

Notification.send(`
********* *${currentDate}* *********
_An error has been catch, here's some information about that_
*the current folder is   :* ${path2}
*The project's name is   :* ${packageInfo.name}
*version                 :* ${packageInfo.version}
*The current error is    :* ${error}`




, (error, resp) => {
  if (error) {
    return console.error(error);
  }
});

}
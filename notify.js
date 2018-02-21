var gcm = require('node-gcm');
var message = new gcm.Message();
  
//API Server Key
var sender = new gcm.Sender('****');//api key available in the credentials section
var registrationIds = [];
var data = "Test Notification !!!";
  
// Value the payload data to send...
message.addData('message',"Sample push notification from GCM");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','1'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
  
// At least one reg id required
registrationIds.push('***'); // registration id of device fetched by push plugin
  
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
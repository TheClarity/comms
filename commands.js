

function command(comm, response, call){
    this.comm = comm;
    this.response = response;
    this.call = call;
    commands.push(this);
}
function checkComms(message){
  commands.forEach(function(command) {
   if (~message.indexOf(command.comm)){
     $("#messages").append("<p class='message'>"+command.response+"</p>");
     if(command.call != null){
     command.call();
   }
   }
});
}
var commands = [];
var message;
$("#send").click(function() {
  message = $("#message").val();
  sendMessage(message);
  $("#message").val("");
  checkComms(message);
})
function sendMessage(message){
  $("#messages").append("<p class='message'>"+message+"</p>");
}
 var yeet = new command(
   "!yeet",
   "yeet",
   null
)


 var newCom = new command(
   "!newCom",
   "",
   createCom
 )
 var info = new command(
   "!info",
   "this is some random test info!",
   null
 )

  function createCom(meme){
    var comName = message.split(" ")[1];
    var comResponse = message.split("\"")[1];
    if(comName == null || comResponse == null || ~comName.indexOf("\"")){
      sendMessage("incorrect format!")
      return;
    }
   new command(
     comName,
     comResponse,
     null
   )
    sendMessage("Created command " + comName)
 }

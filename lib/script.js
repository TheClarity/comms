commandList();
$("#send").click(function() {
  $("#message").val().checkComms();
});
$("#addCom").click(function() {
  var newcom = $("#newCom").val();
  var newresp = $("#newResponse").val();
  if (newcom != null && comms.indexOf(newcom)<0){
    if(newresp != null){
    comms.push(newcom);
    responses.push(newresp);
    commandList();
  }else{
    alert("Empty Response!")
  }

  }else{
    alert("Empty or defined Command!")
  }
});
function commandList(){
    $("#commandList").html("");
  for(var i = 0; i < comms.length; i++){
    var resp = responses[i];
    $("#commandList").append("<button class = 'removeComm' id='command"+i+"'>Remove</button><h4 >"+ comms[i] + " </h4>");
    $("#commandList").append("<ul style='list-style-type:circle'>");
    for (var j = 0; j < resp.length; j++) {
      $("#commandList").append("&emsp;<button class = 'removeResp' id='command"+i+" response"+j+"'>Remove</button> <li>"+resp[j]+"</li><br>");
    }
    $("#commandList").append("</ul>");

  }
  $("h4").css("display", "inline-block");
  $("li").css("display", "inline-block");
 $("h4").css("margin-bottom", "0px");
 $("button").css("margin-right", "10px");
}
var commNum;
var respNum;
$("html").on("click","button.removeComm",function() {
  console.log(this.id);
  commNum = this.id.split("command")[1];
  comms.splice(commNum,1);
  commandList();

});
$("html").on("click","button.removeResp",function() {
  console.log(this.id);
  commNum = this.id.split("command")[1].split(" ")[0];
  console.log(commNum);
  respNum = this.id.split("response")[1];
  console.log(respNum);
  comms[commNum].splice(1,1);
  commandList();

});

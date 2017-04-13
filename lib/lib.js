
  var comms = ["!test", "!yeet", "!meme"];
  var responses = ["test :: testeroo", "yeet :: yeetee :: lit yeet", "meme"];
String.prototype.contains = function(sub) {
 if(~this.indexOf(sub))
   return true;
  else
  	return false;
}
String.prototype.checkComms = function(){
  var _this = this;
  var _resp;

  for(var i=0; i<comms.length; i++){
    if(_this.contains(comms[i])){
      resp = responses[i].split(" :: ");
      lower_bound = 0,
      upper_bound = resp.length,
      unique_random_numbers = [];
    var random_number = Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);
    console.log(resp[random_number]);

    }
  }
}

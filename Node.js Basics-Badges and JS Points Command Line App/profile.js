//problem: We need a simple way to look at a user's badge count and JS points
//solution: use node.js to connect to treehouses's API to get profile info to print out


const https =require("https");
var http =require("http");

// print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badges and " + points + " points in JavaScript";
  console.log(message);
}

//print out error message
function printError(error){
  console.error(error.message);
}
function get(username){
  //connect to the API URL (http://teamtreehouse.xom/username.json)
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) { 
    var body = "";
    //read the data
    response.on('data', function (chunk) {
      body+= chunk;
    });
    response.on('end', function(){
      if(response.statusCode === 200) {
        try {
          //parse the data
          var profile = JSON.parse(body);
          //print the data 
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        }catch(error) {
          //parse error
          printError(error);
        }
      } else {
        //status code error
        printError({message: "there was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCodes] + ")" });
        }
      });
  });
//connection error
request.on("error", printError);
}




module.exports.get = get;
  

var fs = require("fs");

function mergeValues(values, content) {
 //cycle over the keys
  for(var key in values){
    //replace all {{key}} with the value from values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged content
  return content;
}

//4 function that handles the reading of files and merge in values
  //read from file and get a string
    //merge value into string


function view(templateName, values, response) {
  //read from template files
  var fileContents = fs.readFileSync("./views/" + templateName + ".html", {encoding: "utf8"}); 
  //insert values to content
  fileContents = mergeValues(values, fileContents);
    //write out to the response
    response.write(fileContents); 
}

module.exports.view = view;
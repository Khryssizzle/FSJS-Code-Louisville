var router = require("./router.js");
//const hostname = '127.0.0.1';
const port = 3000;
//problem: we need a simple way to look at a user's badge count and JS points from a web browser
//solution: use node.js to perform the profile look ups and server our template via http

//1 create a web server
const http = require('http');
const server = http.createServer(function (request, response) {
  router.home(request,response);
  router.user(request,response);
});
server.listen(port, () => {
console.log("Server running at http://${port}/");
});




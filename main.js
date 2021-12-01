var http = require("http");
var fs = require('fs');


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   var file = fs.createReadStream('index.html');
   file.pipe(response);
   // Send the response ody as "Hello World"
  // response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.getAccounts(console.log);


var contract = new web3.eth.Contract(jsonInterface, address);


//get contract
//deposit
//withdraw
//Display Ether Price
//Display Vault Amount



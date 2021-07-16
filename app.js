/*server.js Alexander Toscano Ricardo*/
const http = require("./lib/app");

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || "0.0.0.0";

http.listen(server_port, server_host, function () {
  console.log(`server is running on  ${server_host}:${server_port}`);
});

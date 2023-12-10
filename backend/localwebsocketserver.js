const WebSocketServer = require("websocket").server;
const http = require("http");

const server = http.createServer((request, response) => {
  // This is just a placeholder for your HTTP server logic
  response.writeHead(404);
  response.end();
});

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false,
});

wsServer.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  console.log("Connection accepted.");

  connection.on("message", (message) => {
    console.log(message);
    connection.send(JSON.stringify({ status: "connected" }));
  });

  connection.on("close", (reasonCode, description) => {
    console.log(`Connection closed: ${reasonCode} - ${description}`);
  });
});

const port = 8080;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

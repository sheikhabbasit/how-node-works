const EventEmitter = require("events");
const http = require("http");

// event emitter is kinda similar to our click on a button but on backend
// **functional approach**
// const myEmitter = new EventEmitter();

// class based inheritance for event emitter
// ** class based approach

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", (stockLeft) => {
  console.log("New sale happened, new stock left: ", stockLeft);
});

// This emits a an event to myEmitter which is on above
myEmitter.emit("newSale", 99);

// ---------------------------------------------------------------------------------//
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Accepting a request");
  res.end("Request received");
});

server.close("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests");
});

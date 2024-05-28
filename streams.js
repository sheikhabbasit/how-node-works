const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // ** Solution 1
  // The way we would normally open up a server and listen and wait to the request
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // ** Solution 2
  //   Creating a readable stream to read the file
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });
  //  ** Solution 3

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // below is the explanation of what is written above
  //   readableSource.pipe(writeableDestination);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests");
});

const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => {
  console.log("Timer 1 finished");
}, [0]);

setImmediate(() => {
  console.log("Immediata execution 1");
});

fs.readFile("./test-file.txt", (err, data) => {
  console.log("data is here");

  setTimeout(() => {
    console.log("Timer 2 finished");
  }, [0]);

  setImmediate(() => {
    console.log("Immediata execution 2");
  });

  process.nextTick(() => {
    console.log("next tick 1");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha256", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha256", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha256", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha256", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });
});

console.log("top level code log");

const { readFile, writeFile } = require("fs");

console.log("Start...");

readFile("./demo.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(`Something went wrong. Details: ${err}`);
    return;
  }
  const first = res;
  readFile("./demo2.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(`Something went wrong. Details: ${err}`);
      return;
    }
    const second = res;
    writeFile(
      "./write-async.txt",
      `The combined result is: ${first} and ${second}`,
      (err, res) => {
        if (err) {
          console.log(`Something went wrong. Details: ${err}`);
          return;
        }
        console.log("Content written successfully...");
      }
    );
  });
});

console.log("End...");

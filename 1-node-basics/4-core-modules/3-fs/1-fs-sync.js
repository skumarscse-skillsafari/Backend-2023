const { readFileSync, writeFileSync } = require("fs");

console.log("Start...");
const read = readFileSync("./demo.txt", "utf-8");
console.log(read);

writeFileSync("./write.txt", `The read content is: ${read}\n`, { flag: "a" });

console.log("End...");

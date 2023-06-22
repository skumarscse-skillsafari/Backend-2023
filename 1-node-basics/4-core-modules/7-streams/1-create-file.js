const { writeFileSync } = require("fs");

for (let i = 1; i <= 100000; i++) {
  writeFileSync("./stream-file.txt", `The result => Line number: ${i}\n`, {
    flag: "a",
  });
}

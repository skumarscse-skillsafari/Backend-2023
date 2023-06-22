const { createReadStream } = require("fs");

// highWaterMark => define the chunks
// default => 64kb

const stream = createReadStream("./stream-file.txt", {
  highWaterMark: 900000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

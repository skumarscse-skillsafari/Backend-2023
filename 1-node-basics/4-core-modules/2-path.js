const path = require("path");

console.log(path.sep);

const newPath = path.join("/path/", "newfolder", "filename.xlsx");

console.log(newPath);

console.log(path.basename(newPath));

console.log(path.resolve(__dirname, newPath));

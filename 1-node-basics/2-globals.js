// Globals - Node

// module => each and every file and folder can be considered as a module

// __dirname => path of the current directory
// __filename => filename
// module
// require => import a module in another module
// process => info about the "env"
// exports

console.log(`The path is: ${__dirname}`);

setTimeout(() => {
  console.log("Welcome to Node.js...");
}, 2000);

console.log(`The Filename: ${__filename}`);

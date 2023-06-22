const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// console.log(customEmitter);

// on() and emit()
// on() => create an event
// emit() => execute/emit the event

customEmitter.on("response", (id, userName, age) => {
  console.log(`User Id: ${id}`);
  console.log(`Username: ${userName}`);
  console.log(`User Age: ${age}`);
});

customEmitter.emit("response", 10001, "John", 20);

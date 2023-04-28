const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first callback - ", args);
};
//등록하는 거라고 생각하면 될 거 같다
emitter.on("ellie", callback1);

emitter.on("ellie", (args) => {
  console.log("second callback - ", args);
});
//실행시겨주는 거라고 생각하면 될 거 같다
emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });
emitter.removeAllListeners();
emitter.emit("ellie", { message: 3 });

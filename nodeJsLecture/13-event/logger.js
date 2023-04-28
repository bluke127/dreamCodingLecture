const EventEmitter = require("events");

//eventEmitter는 생성했을때에 객체만 바라봄
//따라서 상속을 통해서 사용해서 export 해야함
class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended!");
  }
}

// module.exports.Logger = Logger;
// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// function log(callback) {
//   emitter.emit("log", "started...");
//   callback();
//   emitter.emit("log", "ended...");
// }

module.exports.Logger = Logger;

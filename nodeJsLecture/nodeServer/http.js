const http = require("http");
const fs_p = require("fs").promises;
console.log(http.METHODS);
const server = http.createServer((req, res) => {
  console.log("incomng...");
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.write("Welcom");
    fs_p.w;
  } else if (url === "/course") {
    res.write("course");
    fs_p.createReadStream("./temlplate/course.ejs").pipe(res);
  } else {
    res.write("Not Found");
  }
  res.end();
});

server.listen(8080);

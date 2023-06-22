const http = require("http");
const fs_p = require("fs").promises;
const ejs = require("ejs");
const name = "Ellie";
console.log(http.METHODS);
const courses = [{ name: "HTML" }, { name: "css" }, { name: "js" }];
const server = http.createServer((req, res) => {
  // console.log("incomng...");
  // console.log(req.headers);
  // console.log(req.method);
  console.log(req.url, "??");
  const url = req.url;
  if (url === "/") {
    // res.write("Welcom");
  } else if (url === "/course") {
    // res.write("course");
    ejs
      .renderFile("./template/course.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    // res.write("Not Found");
  }
  // res.end();
});

server.listen(8080);

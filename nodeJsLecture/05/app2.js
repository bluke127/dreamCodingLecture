const fs = require("fs").promises;
//read file
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

//writing file
fs.writeFile("./text.txt", "Hello").catch(console.error);
//copy
fs.copyFile("./text.txt", "./file2.txt");
//folder 만들기
fs.mkdir("sub-folder");
//모두 프로미스임

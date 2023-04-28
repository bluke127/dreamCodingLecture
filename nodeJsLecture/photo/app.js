//계획
//1. 사용자가 원하는 폴더의 이름을 받아온다

const fs = require("fs");
const path = require("path");
const os = require("os");

// // console.log(__dirname, "__dirname");
// // console.log(__filename, "__filename");
// // console.log(path.parse(__filename), "path");
// console.log(fs, "fs");
// // fs.readFile();
// const folder = process.argv[2];
const folder = "test";
console.log(process.argv[2], process.argv);
//첫번째 인자는 노드가 실행되는 경로, 노드 어플리케이션의 경로, 인자
// test [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\드림코딩\\nodeJsLecture\\photo\\app.js',
//   'test'
// ]
//path.join => 홈경로, 안에 폴더, 안에 폴더
const workingDir = path.join(__dirname, folder);
console.log(os.homedir(), "os");
console.log(workingDir, "오잉");
if (!folder || !fs.existsSync(workingDir)) {
  // fs.promises.mkdir(workingDir);
  console.error("please enter folder name in picture");
  return;
}
console.log(workingDir, "오잉");

//2. 그 폴더안에 있는 폴더를 만든다
const videoDir = path.join(workingDir, "video");
console.log(videoDir, "videoDir");
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
//동기적으로 만들기위해 mkdirSync
const capturedDir = path.join(workingDir, "captured");
console.log(capturedDir, "capturedDir");
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
//동기적으로 만들기위해 mkdirSync
const duplicatedDir = path.join(workingDir, "duplicated");
console.log(duplicatedDir, "duplicatedDir");
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);
//동기적으로 만들기위해 mkdirSync
//3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 각기 폴더로
fs.promises.readdir(workingDir).then(processFiles).catch(console.log);
function processFiles(files) {
  files.forEach((file) => {
    console.log(file);
    if (isVideoFile(file)) {
      console.log("video", file);
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      console.log("capture", file);
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      console.log("dupli", file);
      move(file, duplicatedDir);
    }
  });
}
function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  //IMG_XXX=>IMG_EXXX
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }
  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}
function move(file, targetDir) {
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath).catch(console.log);
}

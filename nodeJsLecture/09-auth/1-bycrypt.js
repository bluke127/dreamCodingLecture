const bcrypt = require("bcrypt");
const password = "abcd1234";
const hashed = bcrypt.hashSync(password, 15);
// 두번째 인자는 복잡도, 클 수록 길이가 길어지고 복잡해짐,, 단 실행되는 시간이 길어짐
console.log(`password : ${password}, hashed:${hashed}`);
//비교
const result = bcrypt.compareSync("abcd1234", hashed);
console.log(result);
const result1 = bcrypt.compareSync("abcd123456", hashed);
console.log(result1);

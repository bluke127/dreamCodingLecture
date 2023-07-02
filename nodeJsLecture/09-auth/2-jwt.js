const jwt = require("jsonwebtoken");
const secret = "OW35k6D!^!4DWlT%GKW8&4cQtL7L&Xo&*$i&"; //시크릿키
const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  //OW35k6D!^!4DWlT%GKW8&4cQtL7L&Xo&*$i& 여기서 만들 수 있음
  secret, //시크릿키
  { expiresIn: 2 }
); //==>토큰 생성

console.log(token);
//해독은 https://jwt.io/ 여기서
const edited =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODgyOTc2Nzh9.iFzbo4Km-BfToR41YvywkWF8Jx6jEXzC-I7D0emZdAk";
//isAdmin을 false로
jwt.verify(edited, secret, (err, decoded) => {
  console.log(err, decoded);
});
// ==> 이 코드는 에러가 나오는데 한번생성된 토큰을 변경하면 에러가 나옴
setTimeout(() => {
  jwt.verify(token, secret, (err, decoded) => {
    console.log(err, decoded);
  });
}, 3000);
//expiresIn의 시간보다 뒤에 실행함=> 에러나옴

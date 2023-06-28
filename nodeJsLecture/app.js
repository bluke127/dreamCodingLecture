import express from "express";
const app = express();
//post든 get, put 이든 실행됨 (all, use)
//차이점
// app.all("/api", (req, res, next) => {
//   console.log("all");
//   next();
// });
// app.use("/api", (req, res, next) => {
//   console.log("use");
//   next();
// });
// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("first");
//     next(new Error());
//   },
//   (req, res, next) => {
//     console.log("first2");
//     next();
//   }
// );
// app.get("/", (req, res, next) => {
//   console.log("second");
// });
// app.use((req, res, nexxt) => {
//   res.status(404).send("Not available");
// });
// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send("Sorry, try later");
// });
// app.use("/post", postRoute);
// app.listen(8080);

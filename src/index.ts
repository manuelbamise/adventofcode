import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;


const string = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
`;

const character = string.split("");

console.log(character[0]);




app.listen(PORT, () => {
  console.log("app is listening on port 3000");
});

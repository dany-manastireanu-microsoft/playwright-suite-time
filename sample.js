const { writeFileSync, existsSync, mkdirSync, writeFile } = require("fs");
const { dirname } = require("path");
const thePath = "./ss/sss/file.txt";
// if (!existsSync(dirname(thePath))) {
//   console.log("Not exist. Create");
//   mkdirSync(dirname(thePath), { recursive: true });
// }

console.log(`${existsSync("./tests/foo.spec2.ts")}`);

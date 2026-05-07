const bcrypt = require("bcryptjs");

const password = "Student123!";
const hash = bcrypt.hashSync(password, 10);

console.log(hash);
console.log(bcrypt.compareSync(password, hash));

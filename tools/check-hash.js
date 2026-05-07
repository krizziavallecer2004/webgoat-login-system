const bcrypt = require("bcryptjs");

const hashFromServer = "$2b$10$z3bb1ykGs94VfWp4a9IGQuG59FeaebcVCno6fgyUuvL8rphAqB.by";
console.log("match:", bcrypt.compareSync("Student123!", hashFromServer));

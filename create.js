const {Username} = require("./models")

Username.create({
    "name": "Yolanda",
    "address": "Kupang"

})
    .then((result) => {
        console.log(result, "==> INI RESULT");
        console.log("==> Berhasil");
    }).catch((err) => {
        console.log(err, "==> ini Error");
    });
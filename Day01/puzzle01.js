const fs = require("fs");

try {
    const data = fs.readFileSync("input.txt", "utf8").split("\n");
    console.log("data[0] :: ", data[0]);
} catch (e) {
    console.error("Error: ", e.stack());
}
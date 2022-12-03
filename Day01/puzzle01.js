var fs = require("fs");

try {
    var allCalories = fs.readFileSync("input.txt", "utf8").split("\n");
    var maxTotalCalories = 0;
    var currentTotalCalories = 0;

    for (const currentCalory of allCalories) {
        if (currentCalory === "") {
            console.log("\nBreak Detected!");
            console.log("Max Total Calories = ", maxTotalCalories);
            console.log("Current Total Calories = ", currentTotalCalories);
            if (currentTotalCalories > maxTotalCalories) maxTotalCalories = currentTotalCalories;
            currentTotalCalories = 0;
        } else {
            currentTotalCalories += parseInt(currentCalory);
        }
    }

    const returnData =  maxTotalCalories > currentTotalCalories ? maxTotalCalories : currentTotalCalories;
    console.log("Max Calories = ", returnData);
} catch(e) {
    console.log("Error: ", e.stack);
}

/* 
try {
    var allCalories = fs.readFileSync("input.txt", "utf8").split("\n");
    // console.log(splitData[0]==="");
    let elfInventory = {'1': {calories: [], totalCalories: 0}};
    // Keeping track of the keys seperately so I access the latest elf in O(1) operations //elfNames[elfNames.length - 1]
    let elfNames = ['1'];



    for (const currentCalory of allCalories) {
        if (currentCalory === "") {
            // Update elf names
            const newElfName = elfNames.length + 1;
            elfNames.push(newElfName.toString())
            // Update Elf Inventory
            elfInventory[newElfName.toString()] = {calories: [], totalCalories: 0}
        } else {
            let tempTotalCalories = 0;
            let tempCalories = []

        }

    }
} catch(e) {
    console.log("Error: ", e.stack);
} */
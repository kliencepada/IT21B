const readline = require("readline");

const r1 = readline.createInterface({
    input:porocess.stdin,
    output: process.stdout
})



console.log ("---------------------------");
console.log ("Factorial Application");
console.log ("1. Say Hello");
console.log ("2. Factorial");
console.log ("Exit Application");
console.log ("---------------------------");

r1.question("Enter your choice (1-3): ", choice => {
    console.logh(choice);

    if (choice === "1"){
                console.log("Hello");
    } else if (choice === "2"){
                console.log("Factorial");
    } else if (choice === "3") {
                console.log("Exiting Application");
    } else {
                console.log("Invalid Choice. Please try again!");
            }
        } )
const readline=require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function mainMenu(){
   console.log("-------------------------");
   console.log("1. Say Hello ");
   console.log("2. Factorial");
   console.log("3. Exit Application");
   console.log("-------------------------");

rl.question("Enter your Choice (1-3): ", choice =>{
    console.log(choice);

})
}

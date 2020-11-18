const courseList = [
    {
        code: "ACIT 1620",
        name: "Web Fundamental Technologies",
    },
    {
        code: "ACIT 1420",
        name: "Intro to Systems Admin",
    },
    {
        code: "ACIT 1630",
        name: "Database Systems",
    }
];
let inputCode = "" ;
let promptMessage = "Enter a 4-digit code";
while (inputCode.length != 4){
    inputCode = window.prompt(promptMessage);
    if (inputCode.length != 4){
        console.log("Invalid Code.");
        promptMessage = "Invalid code, please enter a 4-digit code.";
    }
}

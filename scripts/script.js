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

let found = false;

for (var _item of courseList){
    console.log(_item);
    if (_item.code.split(' ')[1] === inputCode){
        console.log(`Yes, I am taking the course: ${_item.code} - ${_item.name}`);
        found = true;
        break; // Break out as we know that we have found the value.
    }
}

if (!found){
    courseList.push({
        code: `ACIT ${inputCode}`,
        name: null,
    })
    console.log(`ACIT ${inputCode} added to course list.`);
    console.log(courseList)
}
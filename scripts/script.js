function createCourseArray() {
    let courses = document.getElementsByClassName('course')
    let courseList = []
    for (var course of courses){

        for (var info of course.children){
            
            if (info.className === 'course-name'){
                var fullName = info.textContent.trim().split(" - ")
                console.log(fullName)
            } else if (info.className === 'course-time'){
                var finishDate = info.textContent.trim()
                console.log(finishDate)
            }
        }
        var courseFull = { //All of the info on a single course
            code: fullName[0],
            name: fullName[1],
            date: finishDate,
        }
        courseList.push(courseFull) // Add the full set of info to the array
    }
    return courseList
}

const courseList = createCourseArray()
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
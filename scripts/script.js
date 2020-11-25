function createCourseArray() {
    let courses = document.getElementsByClassName('course')
    let courseList = []
    for (var course of courses){

        for (var info of course.children){
            
            if (info.className === 'course-name'){
                var fullName = info.textContent.trim()
                console.log(fullName)
            } else if (info.className === 'course-time'){
                var finishDate = info.textContent.trim()
                console.log(finishDate)
            }
        }
        let courseFull = { //All of the info on a single course
            code: fullName,
            date: finishDate,
        }
        courseList.push(courseFull) // Add the full set of info to the array
    }
    return courseList
}


function findCourse(courseList){
    let inputCode = "wrong" ;
    let promptMessage = "Enter a 4-digit code";
    do {

        inputCode = window.prompt(promptMessage);
        console.log(isNaN(parseInt(inputCode), 10))
        if (inputCode.length != 4 || isNaN(parseInt(inputCode), 10)){
            console.log("Invalid Code.");
            promptMessage = "Invalid code, please enter a 4-digit code.";
        }
    } while (inputCode.length != 4 || isNaN(parseInt(inputCode), 10))
    
    let found = false;
    
    for (var _item of courseList){
        console.log(_item);
        if (_item.code.split(' ')[1] === inputCode){
            console.log(`Yes, I am taking the course: ${_item.code}`);
            let element = document.querySelectorAll('.course')
            for(courses of element){
                    let codeContent = courses.children[0].textContent.trim()
                    if (codeContent === _item.code){
                        courses.style.backgroundColor = "#39FF14"
                    }
            } 
            found = true;
            break; // Break out as we know that we have found the value.
        }
    }
    
    if (!found){
        courseList.push({
            code: `ACIT ${inputCode}`,
            date: null,
        })
        console.log(`ACIT ${inputCode} added to course list.`);
        console.log(courseList)
    }
}


const courseList = createCourseArray()
findCourse(courseList)
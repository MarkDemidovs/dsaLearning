const students = ["A", "B", "C", "D", "E"]

let current = 0;

function findStudent(allStudents, studentName) {
    
    if (studentName == allStudents[current]) {
        console.log(`Found it! Its the ${current + 1}st name in the array!`);
    } else if(current > allStudents.length) {
        console.log("Looks like the name doesn't exist in the array.");
        
    }
    else {
        console.log(`Haven't found it yet.. current try: ${current + 1}`);
        current++;
        findStudent(allStudents, studentName);
    }
}

findStudent(students, "F")
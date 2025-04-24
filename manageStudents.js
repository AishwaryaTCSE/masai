
function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(1, 0, "David");

    console.log("Is 'Eve' in the list?", students.includes("Eve")); 
    console.log("Student list:", students.join(","));  }

manageStudents();

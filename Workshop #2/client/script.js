const formElement = document.getElementById("saveTeacher");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let cedula = document.getElementById("cedula").value;
    let age = document.getElementById("age").value;
    let teacher = {
        first_name : firstName,
        last_name : lastName,
        cedula : cedula,
        age: age
    }
    let teacherJSON = JSON.stringify(teacher);
    console.log(teacherJSON);
    fetch('http://localhost:3001/api/teachers', {
        method : 'Post',
        body : teacherJSON
    })
}
)
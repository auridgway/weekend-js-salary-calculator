
let employees = [];
const globalInputs = {firstName: document.getElementById('firstNameInput'), lastName: document.getElementById('lastNameInput'), empID: document.getElementById('inputForID'), title: document.getElementById('titleInput'), annualSalary: document.getElementById('annualSalaryInput')}
const createEmployee = (firstName, lastName, empID, title, annualSalary) => employees.push({firstName, lastName, empID, title, annualSalary});


function submitForm(event){
    event.preventDefault();

    createEmployee(globalInputs.firstName.value, globalInputs.lastName.value, globalInputs.empID.value, globalInputs.title.value, globalInputs.annualSalary.value)
}


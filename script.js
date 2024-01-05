let employees = [];
const globalInputs = {firstName: document.getElementById('firstNameInput'), lastName: document.getElementById('lastNameInput'), empID: document.getElementById('inputForID'), title: document.getElementById('titleInput'), annualSalary: document.getElementById('annualSalaryInput')}
const addEmployeeToArray = (firstName, lastName, empID, title, annualSalary) => employees.push({firstName, lastName, empID, title, annualSalary});

const removeRow = (e) => e.target.closest('tr').remove();

function submitForm(event){
    event.preventDefault();
    let totalMonthlyCost = 0.00;
    addEmployeeToArray(globalInputs.firstName.value, globalInputs.lastName.value, globalInputs.empID.value, globalInputs.title.value, parseFloat(globalInputs.annualSalary.value));

    document.getElementById('tableBody').innerHTML +=`
    <tr>
        <td>${globalInputs.firstName.value}</td>
        <td>${globalInputs.lastName.value}</td>
        <td>${globalInputs.empID.value}</td>
        <td>${globalInputs.title.value}</td>
        <td>${new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'}).format(globalInputs.annualSalary.value)}</td>
        <td><button onClick="removeRow(event)">❌</button></td>
    </tr>`

    for (const person of employees){
        totalMonthlyCost += person.annualSalary;
    }
    document.getElementById("monthlyBudget").innerText = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'}).format(totalMonthlyCost);
    if (totalMonthlyCost > 20000){
        document.getElementById("monthlyBudget").style.backgroundColor = 'red';
    }
}


let totalMonthlyCost = 0.00;
// set our inputs to reference
const globalInputs = { firstNameInput: document.getElementById('firstNameInput'), lastNameInput: document.getElementById('lastNameInput'), empIdInput: document.getElementById('inputForID'), titleInput: document.getElementById('titleInput'), annualSalaryInput: document.getElementById('annualSalaryInput') };
// this will remove the row and recalculate the monthly cost
const removeRow = (e) => {
    e.target.closest('tr').remove();;
    // here we recalculate the monthly cost
    totalMonthlyCost = 0;
    const costArray = document.getElementsByClassName("monthlyCost");
    // calculate cost by grabbing the array from each class, removing the comma and dollarsign, then parse as float, then divide by 12, adding each one in the array
    for (let item of costArray) {
        totalMonthlyCost += parseFloat(item.textContent.replace(",", "").replace("$", "")) / 12;
    }
    // set the new cost right here
    document.getElementById("monthlyBudget").innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalMonthlyCost);
    if (totalMonthlyCost < 20000){
        document.getElementById("monthlyBudget").style.backgroundColor = 'blanchedalmond';
        document.getElementById("monthlyBudget").style.color = 'darkolivegreen';
        document.getElementById("fire").style.opacity = 0;
    }
}
// on hitting enter to submit form this is where the adding magic happens
function submitForm(event) {
    event.preventDefault();
    // here we get the monthly cost for each salary
    totalMonthlyCost += globalInputs.annualSalaryInput.value / 12;
    // we add everything in here, setting class of annaul salaries so we can grab that inside info
    document.getElementById('tableBody').innerHTML += `
    <tr>
        <td>${globalInputs.firstNameInput.value}</td>
        <td>${globalInputs.lastNameInput.value}</td>
        <td>${globalInputs.empIdInput.value}</td>
        <td>${globalInputs.titleInput.value}</td>
        <td class="monthlyCost">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(globalInputs.annualSalaryInput.value)}</td>
        <td><button class="buttons" onClick="removeRow(event)">❌</button></td>
    </tr>`
    // here we set the monthly budget
    document.getElementById("monthlyBudget").innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalMonthlyCost);
    // check to see if it's over 20k so we can set the background to red
    if (totalMonthlyCost > 20000) {
        document.getElementById("monthlyBudget").style.backgroundColor = 'darkred';
        document.getElementById("monthlyBudget").style.color = 'white';
        document.getElementById("fire").style.opacity = 1;
    }
}
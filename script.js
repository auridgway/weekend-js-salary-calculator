let employeeCounter = 0;
let totalMonthlyCost = 0.00;

const globalInputs = {firstNameInput: document.getElementById('firstNameInput'), lastNameInput: document.getElementById('lastNameInput'), empIdInput: document.getElementById('inputForID'), titleInput: document.getElementById('titleInput'), annualSalaryInput: document.getElementById('annualSalaryInput')};

const removeRow = (e) => {
    e.target.closest('tr').remove();;

    totalMonthlyCost = 0;
    const costArray = document.getElementsByClassName("monthlyCost");

    for (let item of costArray){
        totalMonthlyCost += parseFloat(item.textContent.replace(",","").replace("$",""))/12;
    }

    document.getElementById("monthlyBudget").innerText = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'}).format(totalMonthlyCost);
}

function submitForm(event){
    event.preventDefault();

    totalMonthlyCost += globalInputs.annualSalaryInput.value/12;

    document.getElementById('tableBody').innerHTML +=`
    <tr id="${employeeCounter}">
        <td>${globalInputs.firstNameInput.value}</td>
        <td>${globalInputs.lastNameInput.value}</td>
        <td>${globalInputs.empIdInput.value}</td>
        <td>${globalInputs.titleInput.value}</td>
        <td class="monthlyCost">${new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'}).format(globalInputs.annualSalaryInput.value)}</td>
        <td><button class="buttons" onClick="removeRow(event)">❌</button></td>
    </tr>`


    document.getElementById("monthlyBudget").innerText = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'}).format(totalMonthlyCost);
    if (totalMonthlyCost > 20000){
        document.getElementById("monthlyBudget").style.backgroundColor = 'red';
    }
}
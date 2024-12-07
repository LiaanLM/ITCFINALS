let payroll = [];

function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deduction)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;
    payroll.push({ name, daysWorked, dailyRate, deduction, grossPay, netPay });

    updateTable();

    // Clear inputs
    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deduction').value = '';
}

function updateTable() {
    const tableBody = document.getElementById('payrollTableBody');
    tableBody.innerHTML = '';

    payroll.forEach((employee, index) => {
        const row = `<tr>
                        <td>${index + 1}</td>
                        <td>${employee.name}</td>
                        <td>${employee.daysWorked}</td>
                        <td>${employee.dailyRate.toFixed(2)}</td>
                        <td>${employee.grossPay.toFixed(2)}</td>
                        <td>${employee.deduction.toFixed(2)}</td>
                        <td>${employee.netPay.toFixed(2)}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function clearPayroll() {
    if (confirm('Are you sure you want to clear all payroll data?')) {
        payroll = [];
        updateTable();
    }
}

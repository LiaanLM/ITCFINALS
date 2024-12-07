function showTable(operationType) {
  document.getElementById('operationTable').style.display = 'table';
  document.getElementById('operationName').textContent = operationType.charAt(0).toUpperCase() + operationType.slice(1);
}

function performOperation() {
  const n = parseInt(document.getElementById('inputN').value);
  let result = 0;

  if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  const operationName = document.getElementById('operationName').textContent.toLowerCase();

  switch (operationName) {
    case 'factorial':
      result = factorial(n);
      break;
    case 'average':
      result = average(n);
      break;
    case 'sum':
      result = sum(n);
      break;
    default:
      break;
  }

  document.getElementById('result').textContent = result;
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function average(n) {
  return n * (n + 1) / 2;
}

function sum(n) {
  return (n * (n + 1)) / 2;
}

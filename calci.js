
// Create a div element to display the result
let resultDiv = document.createElement('div');
document.getElementById("calci").appendChild(resultDiv);

// Get the input field
let input = document.getElementById("input");
let button=document.getElementById("button")

// Add an event listener to the input field that triggers on any input change
button.addEventListener('click', displayResult);

function displayResult() {
    let inputVal = input.value;
    let operator;
    let operands;

    // Check for the presence of operators and split the input accordingly
    if (inputVal.includes('+')) {
        operator = '+';
        operands = inputVal.split('+');
    } else if (inputVal.includes('-')) {
        operator = '-';
        operands = inputVal.split('-');
    } else if (inputVal.includes('*')) {
        operator = '*';
        operands = inputVal.split('*');
    } else if (inputVal.includes('/')) {
        operator = '/';
        operands = inputVal.split('/');
    }

    // If operands are correctly split, perform the calculation
    if (operands && operands.length === 2) {
        let num1 = Number(operands[0]);
        let num2 = Number(operands[1]);
        let ans;

        switch (operator) {
            case '+':
                ans = num1 + num2;
                break;
            case '-':
                ans = num1 - num2;
                break;
            case '*':
                ans = num1 * num2;
                break;
            case '/':
                ans = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
                break;
            default:
                ans = 'Invalid operation';
        }

        // Display the result in the resultDiv
        resultDiv.innerHTML = ans;
    } else {
        // Clear the result if the input is not complete
        resultDiv.innerHTML = '';
    }
}
        

    

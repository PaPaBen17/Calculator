function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const audio = new Audio();
    const operation = document.getElementById("operation").getAttribute("data-operation");
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                result = "Division by zero is not allowed!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation!";
    }

    document.getElementById("result").textContent = "Result: " + result;
}

function setOperation(operation) {
    document.getElementById("operation").setAttribute("data-operation", operation);
    calculate();
}

audio.src ="btn-effect.mp3";




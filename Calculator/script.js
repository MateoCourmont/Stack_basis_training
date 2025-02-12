const display = document.querySelector(".calculator-result");
const buttons = document.querySelectorAll(".btn");

let isResultDisplayed = false; // flag

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.action === "clear") {
            display.textContent = "";
            isResultDisplayed = false;
        } else if (button.dataset.action === "backspace") {
            display.textContent = display.textContent.toString().slice(0, -1);
        } else if (button.dataset.action === "equal") {
            const expression = 
            display.textContent.replace(/x/g, "*").replace(/÷/g, "/");
            try {
                display.textContent = eval(expression);
                isResultDisplayed = true;
            } catch {
                display.textContent = "Error";
                isResultDisplayed = true;
            }
        } else if (button.dataset.action === "sign") {
            display.textContent = -display.textContent;
        } else {
            if (isResultDisplayed) {
                display.textContent = "";
                isResultDisplayed = false;
            }
            display.textContent += button.textContent;
        }
    });
});
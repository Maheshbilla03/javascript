const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            display.value = "0";
        }

        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || "0";
        }

        else if (value === "=") {
            try {
                currentInput = eval(
                    currentInput
                        .replace(/÷/g, "/")
                        .replace(/×/g, "*")
                        .replace(/−/g, "-")
                ).toString();
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }

        else if (value === "√") {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
            display.value = currentInput;
        }

        else if (value === "x²") {
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
            display.value = currentInput;
        }

        else if (value === "+/-") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        }

        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
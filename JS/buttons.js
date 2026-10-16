function buttonClick() {
    var counterElement = document.getElementById("Counter");
    var currentValue = parseInt(counterElement.textContent);
    var newValue = currentValue + 1;
    counterElement.textContent = newValue;
}

button.addEventListener("click", buttonClick);
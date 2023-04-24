const form = document.getElementById("token-counter-form");
const textInput = document.getElementById("text-input");
const tokenCount = document.getElementById("token-count");
const clearButton = document.getElementById("clear-btn");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = textInput.value;
    const encoded = encode(text);
    tokenCount.textContent = `Token Count: ${encoded.length}`;
    textInput.disabled = true;
});

clearButton.addEventListener("click", () => {
    textInput.disabled = false;
    textInput.value = "";
    tokenCount.textContent = "";
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("token-counter-form");
    const textArea = document.getElementById("token-counter-textarea");
    const submitButton = document.getElementById("token-counter-submit-button");
    const clearButton = document.getElementById("token-counter-clear-button");
    const tokenCountMessage = document.getElementById("token-counter-message");

    textArea.disabled = false;
    submitButton.disabled = false;

    submitButton.addEventListener("click", async function(event) {
        event.preventDefault();
        const text = textArea.value.trim();
        if (text) {
            const response = await fetch("/", {
                method: "POST",
                body: new FormData(form),
            });
            const data = await response.text();
            tokenCountMessage.style.display = "block";
            tokenCountMessage.textContent = `The text has ${data} tokens.`;
            textArea.disabled = true;
            submitButton.disabled = true;
            clearButton.disabled = false;
        }
    });

    clearButton.addEventListener("click", function(event) {
        event.preventDefault();
        textArea.value = "";
        textArea.disabled = false;
        submitButton.disabled = false;
        clearButton.disabled = true;
        tokenCountMessage.style.display = "none";
        tokenCountMessage.textContent = "";
    });
});

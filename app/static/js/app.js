const form = document.getElementById("token-counter-form");
const textInput = document.getElementById("text-input");
const tokenCount = document.getElementById("token-count");
const countTokensBtn = document.getElementById("count-tokens-btn");
const clearBtn = document.getElementById("clear-btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/count_tokens", {
        method: "POST",
        body: formData,
    });
    const data = await response.json();
    tokenCount.textContent = `Token Count: ${data.token_count}`;
    textInput.disabled = true;
    countTokensBtn.disabled = true;
    clearBtn.disabled = false;
    textInput.classList.add("bg-gray-200");
});

clearBtn.addEventListener("click", () => {
    textInput.disabled = false;
    textInput.value = "";
    countTokensBtn.disabled = false;
    clearBtn.disabled = true;
    tokenCount.textContent = "";
    textInput.classList.remove("bg-gray-200");
});

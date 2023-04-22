document.addEventListener("DOMContentLoaded", () => {
  const countButton = document.querySelector("#count-button");
  const clearButton = document.querySelector("#clear-button");
  const textInput = document.querySelector("#text-input");
  const tokenCount = document.querySelector("#token-count");

  countButton.addEventListener("click", async () => {
    const response = await fetch("/", {
      method: "POST",
      body: new FormData(document.querySelector("form")),
    });
    const data = await response.text();
    tokenCount.textContent = `The text has ${data} tokens.`;
    textInput.disabled = true;
    countButton.disabled = true;
  });

  clearButton.addEventListener("click", () => {
    tokenCount.textContent = "";
    textInput.disabled = false;
    countButton.disabled = false;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#token-count-form");
  const textarea = document.querySelector("textarea[name='text']");
  const countBtn = document.querySelector("#count-tokens-btn");
  const clearBtn = document.querySelector("#clear-btn");
  const tokenCountMsg = document.querySelector("#token-count-msg");

  countBtn.addEventListener("click", async () => {
    countBtn.disabled = true;
    tokenCountMsg.style.display = "none";
    clearBtn.style.display = "none";
    const response = await fetch("/", {
      method: "POST",
      body: new FormData(form),
    });
    const data = await response.json();
    const tokenCount = data.token_count;
    textarea.disabled = true;
    tokenCountMsg.textContent = `The text has ${tokenCount} tokens.`;
    tokenCountMsg.style.display = "block";
    clearBtn.style.display = "block";
  });

  clearBtn.addEventListener("click", () => {
    textarea.disabled = false;
    textarea.value = "";
    countBtn.disabled = false;
    tokenCountMsg.style.display = "none";
    clearBtn.style.display = "none";
  });
});

from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from transformers import AutoTokenizer
from typing import List

app = FastAPI()
tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokenizer.model_max_length = 2048

\@app.get("/")
def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

\@app.post("/count-tokens")
def count_tokens(request: Request,
                text: str = Form(...)) -> List[int]:
    tokens = tokenizer.encode(text)
    return [len(tokens)]


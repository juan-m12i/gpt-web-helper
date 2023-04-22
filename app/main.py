from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from transformers import AutoTokenizer

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/static"), name="static")

templates = Jinja2Templates(directory="app/templates")

model = "gpt2"
tokenizer = AutoTokenizer.from_pretrained(model)
tokenizer.model_max_length = 2048


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/count_tokens")
async def count_tokens(text: str = Form(...)):
    print(f"count tokens {text}")
    tokens = tokenizer.encode(text)
    return {"token_count": len(tokens)}

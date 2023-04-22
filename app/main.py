from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from app.tokenizer import count_tokens
from typing import List

app = FastAPI()
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("count_tokens.html", {"request": request})

@app.post("/count-tokens")
async def count_tokens_route(text: str = Form(...)) -> List[int]:
    return count_tokens(text)

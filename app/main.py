from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from app.tokenizer import count_tokens


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("count_tokens.html", {"request": request})


@app.post("/", response_class=JSONResponse)
async def count(request: Request):
    form_data = await request.form()
    text: str = form_data["text"]
    token_count: int = count_tokens(text)
    return token_count
    #templates.TemplateResponse("count_tokens.html", {"request": request, "token_count": token_count})

from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from typing import List
from app.tokenizer import count_tokens

app = FastAPI()

@app.get("/")
def read_root(request: Request):
    return HTMLResponse("""
        <!DOCTYPE html>
        <html>
            <head>
                <title>Text Analysis Web App</title>
                <link rel="stylesheet" href="/static/styles.css">
            </head>
            <body>
                <h1>Text Analysis Web App</h1>
                <form method="post" action="/count-tokens">
                    <textarea name="text" placeholder="Enter text"></textarea>
                    <button type="submit">Count Tokens</button>
                </form>
            </body>
        </html>
    """)


@app.post("/count-tokens")
def count_tokens_route(text: str = Form(...)) -> List[int]:
    return count_tokens(text)

from fastapi import APIRouter, Request, Form
from transformers import AutoTokenizer

router = APIRouter()

def count_tokens(text: str) -> int:
    model = "gpt2"
    tokenizer = AutoTokenizer.from_pretrained(model)
    tokenizer.model_max_length = 2048
    tokens: List[str] = tokenizer.encode(text)
    return len(tokens)


@router.post("/count-tokens")
async def count_tokens_endpoint(request: Request, text: str = Form(...)):
    return {"token_count": count_tokens(text)}

from typing import List
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokenizer.model_max_length = 2048

def count_tokens(text: str) -> List[int]:
    tokens = tokenizer.encode(text)
    return [len(tokens)]

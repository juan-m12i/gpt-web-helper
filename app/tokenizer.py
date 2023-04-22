from transformers import AutoTokenizer

def count_tokens(text: str) -> list:
    tokenizer = AutoTokenizer.from_pretrained("gpt2")
    tokenizer.model_max_length = 2048
    tokens = tokenizer.encode(text)
    return [len(tokens)]


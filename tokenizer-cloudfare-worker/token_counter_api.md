# Token Counter API

This API allows you to count the number of tokens in a given text using a Cloudflare Worker. The API accepts both `GET` and `POST` requests, returning the token count as a plain text response.

## Usage

### cURL

```sh
curl -X POST -d "This is a test sentence." "https://tokenizer-cloudfare-worker.mj2772458.workers.dev/"
```

### JavaScript

```javascript
async function getTokenCount(text) {
  const response = await fetch("https://tokenizer-cloudfare-worker.mj2772458.workers.dev/", {
    method: "POST",
    body: text,
  });
  const tokens = await response.text();
  console.log(`Token Count: $\{tokens\}`);
}

getTokenCount("This is a test sentence.");
```

### Python

```python
import requests

text = "This is a test sentence."
response = requests.post("https://tokenizer-cloudfare-worker.mj2772458.workers.dev/", data=text)
tokens = response.text
print(f"Token Count: \{tokens\}")
```

## Additional Notes

- The JavaScript example can be used directly in an HTML file within a `<script>` tag or as part of a JavaScript module.
- The Python example requires the `requests` library, which can be installed using `pip install requests` if not already installed.

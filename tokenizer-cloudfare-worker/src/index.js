import { init, Tiktoken } from "../node_modules/@dqbd/tiktoken/lite/init";
import wasm from "../node_modules/@dqbd/tiktoken/lite/tiktoken_bg.wasm";
import model from "../node_modules/@dqbd/tiktoken/encoders/cl100k_base.json";

export default {
  async fetch(request) {
    await init((imports) => WebAssembly.instantiate(wasm, imports));
    const encoder = new Tiktoken(
      model.bpe_ranks,
      model.special_tokens,
      model.pat_str
    );

    let inputString = "";

    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    });

    if (request.method === "GET") {
      // Extract the input string from the query parameter
      const url = new URL(request.url);
      inputString = url.searchParams.get("input") || "";
    } else if (request.method === "POST") {
      // Extract the input string from the request body
      inputString = await request.text();
    } else {
      return new Response("Invalid request method", { status: 400 });
    }

    const tokens = encoder.encode(inputString);
    const numberOfTokens = tokens.length;
    encoder.free();
    return new Response(`${numberOfTokens}`, { headers });
  },
};

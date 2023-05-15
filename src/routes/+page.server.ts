import { OpenAI } from "langchain/llms/openai";

export const load = async () => {
  const model = new OpenAI();
  const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  return res;
};

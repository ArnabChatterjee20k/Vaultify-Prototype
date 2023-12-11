import { pipeline, env } from "@xenova/transformers";
env.useBrowserCache = false;
env.allowLocalModels = false;
const generateEmbedding = async (text) => {
  const pipe = await pipeline("feature-extraction", "Supabase/gte-small");
  const output = await pipe(text, {
    pooling: "mean",
    normalize: true,
  });
  return Array.from(output.data);
};
export default generateEmbedding;

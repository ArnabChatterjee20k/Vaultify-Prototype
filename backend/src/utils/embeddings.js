const generateEmbedding = async (text) => {
    const { pipeline, env } = await import("@xenova/transformers");
    const pipe = await pipeline("feature-extraction", "Supabase/gte-small");
  const output = await pipe(text, {
    pooling: "mean",
    normalize: true,
  });
  return Array.from(output.data);
};
module.exports = generateEmbedding
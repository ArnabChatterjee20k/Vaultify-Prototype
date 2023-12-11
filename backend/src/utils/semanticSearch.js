import supabaseClient from "../supbaseClient";

const generateEmbedding = require("./embeddings");
export async function semanticSearch(query,files_to_be_searched) {
  const embeddings = await generateEmbedding(query);
  const { data } = await supabaseClient.rpc("match_files", {
    query_embedding: embeddings,
    match_threshold: 0.78,
    match_count: 5,
    files_to_be_searched: [1, 2, 3, 4, 5, 6, 7, 8],
  });
}
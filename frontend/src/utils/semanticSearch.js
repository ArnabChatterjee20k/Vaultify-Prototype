import supabaseClient from "../supabaseClient";
import generateEmbedding from "./generateEmbedding";

export async function semanticSearch(query, files_to_be_searched) {
  const embeddings = await generateEmbedding(query);
  const { data } = await supabaseClient.rpc("semantic_search", {
    query_embedding: embeddings,
    match_threshold: 0.78,
    match_count: 5,
    files_to_be_searched: files_to_be_searched,
  });
  return data;
}
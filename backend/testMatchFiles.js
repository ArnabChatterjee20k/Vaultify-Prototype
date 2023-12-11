const supabaseClient = require("./src/supbaseClient");
const tableConfig = require("./src/db/tableConfig");
const createFile = require("./src/utils/createFile");

async function get() {
  const { pipeline, env } = await import("@xenova/transformers");
  const pipe = await pipeline("feature-extraction", "Supabase/gte-small");
  const output = await pipe("hello", {
    pooling: "mean",
    normalize: true,
  });
  const embedding = Array.from(output.data);

  const { data } = await supabaseClient.rpc("match_files", {
    query_embedding: embedding,
    match_threshold: 0.78,
    match_count: 5,
    files_to_be_searched: [1, 2, 3, 4, 5, 6, 7, 8],
  });
  console.log(data);
}
createFile({
  ipfsAddress: "1212",
  fileType: "ldsfjl",
  description: "hello",
}).then(() => {
  get();
});

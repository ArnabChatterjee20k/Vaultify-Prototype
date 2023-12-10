const tableConfig = require("../db/tableConfig");
const supabaseClient = require("../supbaseClient");

async function createFile({ ipfsAddress, fileType, description }) {
  const { status } = await supabaseClient
    .from(tableConfig.FILES)
    .insert({ ipfs_address: ipfsAddress, filetype: fileType, description });
}

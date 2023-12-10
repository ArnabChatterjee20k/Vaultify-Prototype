const tableConfig = require("../db/tableConfig");
const { errorLogger, activityLogger } = require("../logger");
const supabaseClient = require("../supbaseClient");

async function createFile({ ipfsAddress, fileType, description }) {
  try {
    const { status } = await supabaseClient
      .from(tableConfig.FILES)
      .insert({ ipfs_address: ipfsAddress, filetype: fileType, description });
    const message = `file-created-${ipfsAddress}`;
    activityLogger.info(message);
  } catch (error) {
    const message = `file-error-${ipfsAddress}-${error.message}`;
    errorLogger.error(message);
    console.log("error occured in creating file");
  }
}

module.exports = createFile
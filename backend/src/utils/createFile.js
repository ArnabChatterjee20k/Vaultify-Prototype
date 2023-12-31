import tableConfig from "../db/tableConfig.js";
import { errorLogger,activityLogger } from "../logger.js";
import generateEmbedding from "../utils/embeddings.js";
import supabaseClient from "../supbaseClient.js";

async function createFile({ ipfsAddress, fileType, description }) {
  try {
    const { status } = await supabaseClient.from(tableConfig.FILES).insert({
      ipfs_address: ipfsAddress,
      filetype: fileType,
      description,
      embedding: description.toString().trim()
        ? await generateEmbedding(description)
        : null,
    });
    const message = `file-created-${ipfsAddress}-${status}`;
    activityLogger.info(message);
  } catch (error) {
    const message = `file-error-${ipfsAddress}-${error.message}`;
    errorLogger.error(message);
    console.log("error occured in creating file");
  }
}

export default createFile;

// making it work using https://ethereum.stackexchange.com/questions/112946/how-to-get-chainid-network-name-network-id-etc-in-hardhat
import {ethers} from "ethers"
import createFile from "../utils/createFile.js";
import { contractAddress } from "smartcontractconfigs/contractConfigs.js";
const local = "ws://localhost:8080";
const alchemy =
  "wss://eth-sepolia.g.alchemy.com/v2/jKOdO5By8l909tC6dqt4Y6CWqkQTLxf0";
import abi from "smartcontractconfigs/abi.js";

function listenBlockchainEvents() {
  const provider = new ethers.WebSocketProvider(alchemy);

  provider.on("block", async (n) => {
    const block = await provider.getBlock(n);
  });

  provider.on("error", (e) => {
    console.log(e);
  });

  const contract = new ethers.Contract(contractAddress, abi, provider);
  contract.on("FileAdded", async (fileIPFSID, description, fileType) => {
    await createFile({
      ipfsAddress: fileIPFSID,
      description: description,
      fileType: fileType,
    });
  });
}

export default listenBlockchainEvents;

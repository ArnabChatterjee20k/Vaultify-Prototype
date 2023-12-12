import { useAddress, useSigner } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import { contractAddress } from "smartcontractconfigs/contractConfigs";
import abi from "smartcontractconfigs/abi";

export default function useBlockchain() {
  const signer = useSigner();
  const address = useAddress();
  const contract = new ethers.Contract(
    contractAddress,
    abi,
    signer
  );
  async function addFileToBlockchain(fileIPFSID, description, fileType) {
    await contract.addFiles(address, fileIPFSID, description, fileType);
  }
  return { addFileToBlockchain, contract, address };
}

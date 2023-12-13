import { useAddress, useSigner } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import { contractAddress } from "smartcontractconfigs/contractConfigs";
import abi from "smartcontractconfigs/abi";

export default function useBlockchain() {
  const signer = useSigner();
  const address = useAddress();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  async function addFileToBlockchain(fileIPFSID, description, fileType) {
    await contract.addFiles(address, fileIPFSID, description, fileType);
  }

  function getAccessorOfFile(fileIPFSID) {
    return contract.getUserWithFileAccessPermission(fileIPFSID);
  }

  /**
   * 
   * @param {string} fileIPFSID 
   * @param {string[]} reciepientWalletAddress 
   */
  function shareFile(fileIPFSID, reciepientWalletAddress) {
    contract.shareFileWithUsers(fileIPFSID, reciepientWalletAddress);
  }
  return {
    addFileToBlockchain,
    contract,
    address,
    getAccessorOfFile,
    shareFile,
  };
}

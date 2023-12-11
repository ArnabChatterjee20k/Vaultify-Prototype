import { useAddress, useSigner } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";

const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileIPFSID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileType",
				"type": "string"
			}
		],
		"name": "FileAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "userWalletAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fileIPFSID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "filetype",
				"type": "string"
			}
		],
		"name": "addFiles",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "key",
				"type": "string"
			}
		],
		"name": "deleteFromMap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "fileAccessPermission",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "files",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "filesAccessLog",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "userWalletAddress",
				"type": "string"
			}
		],
		"name": "getFilesOfUser",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default function useBlockchain() {
  const signer = useSigner();
  const address = useAddress();
  const contract = new ethers.Contract("0x2aa6CFD4edA1E41F686c79891bf37c164354ABF8", abi, signer);
  async function addFileToBlockchain(fileIPFSID, description, fileType) {
    await contract.addFiles(address, fileIPFSID, description, fileType);
  }
  return { addFileToBlockchain,contract , address};
}

// making it work using https://ethereum.stackexchange.com/questions/112946/how-to-get-chainid-network-name-network-id-etc-in-hardhat
const { ethers } = require("ethers");
const createFile = require("../utils/createFile");
const address = "0x2aa6CFD4edA1E41F686c79891bf37c164354ABF8";
const local = "ws://localhost:8080";
const alchemy =
  "wss://eth-sepolia.g.alchemy.com/v2/jKOdO5By8l909tC6dqt4Y6CWqkQTLxf0";
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "fileIPFSID",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fileType",
        type: "string",
      },
    ],
    name: "FileAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "userWalletAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "fileIPFSID",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "filetype",
        type: "string",
      },
    ],
    name: "addFiles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "deleteFromMap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "fileAccessPermission",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "files",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filesAccessLog",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "userWalletAddress",
        type: "string",
      },
    ],
    name: "getFilesOfUser",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

function listenBlockchainEvents() {
  const provider = new ethers.WebSocketProvider(alchemy);

  provider.on("block", async (n) => {
    const block = await provider.getBlock(n);
  });

  provider.on("error", (e) => {
    console.log(e);
  });

  const contract = new ethers.Contract(address, abi, provider);
  contract.on("FileAdded", async (fileIPFSID, description, fileType) => {
    await createFile({
      ipfsAddress: fileIPFSID,
      description: description,
      fileType: fileType,
    });
  });
}

module.exports = listenBlockchainEvents;

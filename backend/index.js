// const express = require("express");
// const data = require("smartcontractconfigs/abi")
// const filesRouter = require("./src/routes/files");
// const listenBlockchainEvents = require("./src/listeners/listenBlockchainEvents");
// const abi = require("smartcontractconfigs");
import express from "express"
import filesRouter from "./src/routes/files.js"
import listenBlockchainEvents from "./src/listeners/listenBlockchainEvents.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/files",filesRouter);

const port = 8000;
app.listen(port, async() => {
  listenBlockchainEvents();
  console.log(`Server is running on localhost://${port}`);
});

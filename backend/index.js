const express = require("express");
const filesRouter = require("./src/routes/files");
const listenBlockchainEvents = require("./src/listeners/listenBlockchainEvents");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/files",filesRouter);

const port = 8000;
app.listen(port, () => {
  listenBlockchainEvents();
  console.log(`Server is running on localhost://${port}`);
});

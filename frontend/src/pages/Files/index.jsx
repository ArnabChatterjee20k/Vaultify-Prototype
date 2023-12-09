import React from "react";
import Header from "../../layout/Header";
import Box from "@mui/material/Box";
import AddFileIcon from "./AddFileIcon";
import { MediaRenderer } from "@thirdweb-dev/react";
// url structure for media rendering is https://ipfs.io/ipfs/QmSi9Wcwzx535p3ydYNLWJREq9z5DhTNSue6fnoPkQGna2
// https://portal.thirdweb.com/react/react.mediarenderer
export default function index() {
  return (
    <Box sx={{ paddingX: "3em" }}>
      <Header heading="My Files">{/* searchbox */}</Header>
      <AddFileIcon />
    </Box>
  );
}

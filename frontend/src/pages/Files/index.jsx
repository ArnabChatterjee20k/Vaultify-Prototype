import React from "react";
import Header from "../../layout/Header";
import Box from "@mui/material/Box";
import AddFileIcon from "./AddFileIcon";
import SearchBar from "./SearchBar";
import FilesViewer from "../../components/FilesViewer";
import { useFiles } from "../../context/FilesContextProvider";

// url structure for media rendering is https://ipfs.io/ipfs/QmSi9Wcwzx535p3ydYNLWJREq9z5DhTNSue6fnoPkQGna2
// https://portal.thirdweb.com/react/react.mediarenderer
export default function index() {
  const { files } = useFiles();
  return (
    <Box sx={{ paddingX: "3em" }}>
      <Header heading="My Files">
        <div style={{ marginLeft: "auto" }}>
          <SearchBar />
        </div>
      </Header>
      <AddFileIcon />
      <FilesViewer files={files} owner={true} />
    </Box>
  );
}

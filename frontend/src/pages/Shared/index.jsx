import React from "react";
import { useFiles } from "../../context/FilesContextProvider";
import FilesViewer from "../../components/FilesViewer";

export default function index() {
  const { sharedFiles } = useFiles();
  console.log(sharedFiles)
  return (
    <div>
      <FilesViewer files={sharedFiles} owner={false} />
    </div>
  );
}

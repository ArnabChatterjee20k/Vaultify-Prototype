import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
import { useRef, useState } from "react";
import useUploadFiles from "./services/useUploadFiles";
import Button from "@mui/material/Button";
import useBlockchain from "../../services/useBlockchain";

export default function index() {
  const [file, setFile] = useState(null);
  const fileDescription = useRef("");
  const { addFileToBlockchain } = useBlockchain();
  const handleChange = (file) => {
    setFile(file);
  };
  const { upload, isUploadLoading } = useUploadFiles();
  async function submit() {
    if (!fileDescription.current.trim()) {
      alert("Please give file description");
      return;
    }
    const [ipfsURI] = await upload({ data: [file] });
    addFileToBlockchain(ipfsURI, fileDescription.current, file.type);
  }
  return (
    <Box>
      <FileUploader handleChange={handleChange} name="file" />
      <input
        onChange={(e) => {
          fileDescription.current = e.target.value;
        }}
        style={{ padding: "1em", fontSize: "1rem" }}
        type="text"
        placeholder="description of the image"
      />
      <Button onClick={submit}>
        {isUploadLoading ? "Loading..." : "Upload"}
      </Button>
    </Box>
  );
}

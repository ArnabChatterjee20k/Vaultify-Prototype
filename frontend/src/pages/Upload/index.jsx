import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
import { useRef, useState } from "react";
import useUploadFiles from "./services/useUploadFiles";
import Button from "@mui/material/Button";

export default function index() {
  const [file, setFile] = useState(null);
  const fileName = useRef("");
  const handleChange = (file) => {
    setFile(file);
  };
  const { upload, isUploadLoading } = useUploadFiles();
  async function submit() {
    await upload({ data: [file] });
    alert("done");
  }
  return (
    <Box>
      <FileUploader handleChange={handleChange} name="file" />
      <input
        onChange={(e) => {
          fileName.current = e.target.value;
        }}
        style={{ padding: "1em", fontSize: "1rem" }}
        type="text"
        placeholder="name of the image"
      />
      <Button onClick={submit}>
        {isUploadLoading ? "Loading..." : "Upload"}
      </Button>
    </Box>
  );
}

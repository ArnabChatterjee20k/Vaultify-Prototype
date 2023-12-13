import Stack from "@mui/material/Stack";
import { useStorage } from "@thirdweb-dev/react";
import { getFileName, getFileType } from "../utils/ipfs";
import FileCard from "./FileCard";

export default function FilesViewer({ files, owner }) {
  const storage = useStorage();

  return (
    <Stack flexDirection="row" alignItems="flex-start" gap={2}>
      {files.map((ipfs) => {
        return (
          <FileCard
            owner={owner}
            fileIPFSID={ipfs}
            url={storage.resolveScheme(ipfs)}
            fileType={getFileType(ipfs)}
            title={getFileName(ipfs)}
          />
        );
      })}
    </Stack>
  );
}

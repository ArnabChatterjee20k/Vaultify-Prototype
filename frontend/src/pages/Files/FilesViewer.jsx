import Stack from "@mui/material/Stack";
import { useFiles } from "../../context/FilesContextProvider";
import { useStorage } from "@thirdweb-dev/react";
import FileCard from "../../components/FileCard";
import { getFileName, getFileType } from "../../utils/ipfs";

export default function FilesViewer() {
  const { files } = useFiles();
  const storage = useStorage();

  return (
    <Stack flexDirection="row" alignItems="flex-start" gap={2}>
      {files.map((ipfs) => {
        return (
          <FileCard
            url={storage.resolveScheme(ipfs)}
            fileType={getFileType(ipfs)}
            title={getFileName(ipfs)}
          />
        );
      })}
    </Stack>
  );
}

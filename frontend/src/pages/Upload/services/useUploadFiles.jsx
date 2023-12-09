import { useStorageUpload } from "@thirdweb-dev/react";

export default function useUploadFiles() {
  const { mutateAsync: upload, isLoading: isUploadLoading } =
    useStorageUpload();

  return { upload, isUploadLoading };
}

// directory specification

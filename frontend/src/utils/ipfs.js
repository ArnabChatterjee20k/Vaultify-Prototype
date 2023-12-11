export function getFileType(ipfsURL) {
  const fileURI = ipfsURL.split(".");
  return fileURI[fileURI.length - 1];
}

export function getFileName(ipfsURL) {
  const fileURI = ipfsURL.split("/");
  return fileURI[fileURI.length - 1];
}
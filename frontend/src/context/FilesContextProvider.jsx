import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import useBlockchain from "../services/useBlockchain";
const FilesContext = createContext();
export const useFiles = () => useContext(FilesContext);
export default function FilesContextProvider({ children }) {
  const { contract, address } = useBlockchain();
  const [files, setFiles] = useState([]); // userWallet => files
  const [sharedFiles, setSharedFiles] = useState([]);
  const [queriedFiles, setQueriedFiles] = useState([]);
  async function getFiles() {
    const files = await contract.getFilesOfUser();
    setFiles(files);
  }

  async function getSharedFiles() {
    const files = await contract.getSharedFilesWithSender();
    setSharedFiles(files);
  }

  useEffect(() => {
    getFiles();
    getSharedFiles();
  }, [address]);

  return (
    <FilesContext.Provider
      value={{ files, getFiles, queriedFiles, setQueriedFiles , sharedFiles}}
    >
      {children}
    </FilesContext.Provider>
  );
}

import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import useBlockchain from "../services/useBlockchain";
const FilesContext = createContext();
export const useFiles = () => useContext(FilesContext);
export default function FilesContextProvider({ children }) {
  const { contract, address } = useBlockchain();
  const [files, setFiles] = useState([]); // userWallet => files
  const [queriedFiles, setQueriedFiles] = useState([]);
  async function getFiles() {
    const files = await contract.getFilesOfUser();
    setFiles(files);
  }
  useEffect(() => {
    getFiles();
  }, [address]);

  return (
    <FilesContext.Provider
      value={{ files, getFiles, queriedFiles, setQueriedFiles }}
    >
      {children}
    </FilesContext.Provider>
  );
}

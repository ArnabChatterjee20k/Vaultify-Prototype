import { useRef } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { semanticSearch } from "../../utils/semanticSearch";
import { useFiles } from "../../context/FilesContextProvider";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const { files } = useFiles();
  const [query, setQuery] = useSearchParams();
  async function search() {
    const data = await semanticSearch(query.get("q"), files);
    
  }
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        value={query.get("q")}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search file names,description"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => setQuery({ q: e.target.value })}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={search}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

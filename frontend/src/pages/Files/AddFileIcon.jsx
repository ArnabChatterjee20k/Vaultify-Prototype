import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function AddFileIcon() {
    const nav = useNavigate()
  return (
    <Fab
        onClick={()=>nav("/upload")}
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: 3, right: 10, margin: "1rem" }}
    >
      <AddIcon />
    </Fab>
  );
}

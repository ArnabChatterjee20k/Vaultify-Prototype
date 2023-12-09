import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./layout/SideNav";
import Files from "./pages/Files/";
import Upload from "./pages/Upload";
import Box from "@mui/material/Box";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", gap: "2em" }}>
        <SideNav />
        <Box
          sx={{
            paddingBlock: "1.2rem",
            width: "100%",
            backgroundColor: "whitesmoke",
            paddingInline: "1em",
          }}
        >
          <Routes>
            <Route path="/" element={<Files />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;

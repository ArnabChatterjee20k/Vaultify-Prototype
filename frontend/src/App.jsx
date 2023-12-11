import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import { useAddress } from "@thirdweb-dev/react";
import { AuthorisedHome } from "./pages/AuthorisedHome";
import Auth from "./pages/Auth";
import FilesContextProvider from "./context/FilesContextProvider";

function App() {
  const address = useAddress();
  return (
    <BrowserRouter>
      <FilesContextProvider>
        <Box sx={{ display: "flex", gap: "2em" }}>
          {address ? <AuthorisedHome /> : <Auth />}
        </Box>
      </FilesContextProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import { useAddress } from "@thirdweb-dev/react";
import { AuthorisedHome } from "./pages/AuthorisedHome";
import Auth from "./pages/Auth";
function App() {
  const address = useAddress()
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", gap: "2em" }}>
        {address?<AuthorisedHome/>:<Auth/>}
      </Box>
    </BrowserRouter>
  );
}

export default App;

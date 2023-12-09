import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";

export default function SideNav() {
  const drawerWidth = 200;
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth,minHeight:"100vh" },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            position: "static",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
        open
      >
        <List disablePadding>
          <ListItem>
            <ListItemText
              sx={{ "& span": { fontSize: "1.1rem", fontWeight: "medium" } }}
            >
              Vaulitfy
            </ListItemText>
          </ListItem>
          <NavLink text="files" link="/" />
          <NavLink text="shared with me" link="/shared" />
          <NavLink text="recents" link="/recents" />
          <NavLink text="Profile" link="/acount" />
        </List>
      </Drawer>
    </Box>
  );
}

function NavLink({ text, link }) {
  const { pathname } = useLocation();
  return (
    <ListItem>
      <ListItemButton
        sx={{ borderRadius: "20px" }}
        selected={pathname === link}
      >
        <ListItemText>
          <Link
            to={link}
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            {text}
          </Link>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

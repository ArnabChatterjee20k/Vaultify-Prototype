import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useBlockchain from "../services/useBlockchain";
import { useEffect, useState } from "react";

export default function ShareModal({ fileIPFSID }) {
  console.log({ fileIPFSID });
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 435 } }}
      maxWidth="xs"
      open={true}
    >
      <DialogTitle>Share</DialogTitle>
      <DialogContent dividers>
        <ShareBox />
        <AccessList fileIPFSID={fileIPFSID} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus>Done</Button>
      </DialogActions>
    </Dialog>
  );
}
function ShareBox() {
  return (
    <Stack flexDirection="row" marginY="1rem">
      <TextField placeholder="Add people" fullWidth />
      <Button>Share</Button>
    </Stack>
  );
}

function AccessList({ fileIPFSID }) {
  const { getAccessorOfFile } = useBlockchain();
  const [accessors, setAccessors] = useState([]);
  const [status, setStatus] = "loading"; // loading,success
  useEffect(() => {
    (async () => {
      const data = await getAccessorOfFile(fileIPFSID);
      setAccessors(data);
      setStatus("success");
    })();
  }, []);
  return (
    <Stack>
      <Typography>People with access</Typography>
      <Stack>
        {accessors.map((user) => (
          <li>{user}</li>
        ))}
      </Stack>
    </Stack>
  );
}

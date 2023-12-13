import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useBlockchain from "../services/useBlockchain";
import { useEffect, useState } from "react";

export default function ShareModal({ fileIPFSID, open, handleClose }) {
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>Share</DialogTitle>
      <DialogContent dividers>
        <ShareBox fileIPFSID={fileIPFSID}/>
        <AccessList fileIPFSID={fileIPFSID} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}
function ShareBox({fileIPFSID}) {
  const [addresses, setAddresses] = useState([]);
  const {shareFile} = useBlockchain()
  return (
    <Stack flexDirection="row" marginY="1rem">
      <Autocomplete
        onChange={(e) => {
          setAddresses((prev) => [...prev, e.target.value]);
        }}
        fullWidth
        clearIcon={false}
        options={[]}
        value={addresses}
        freeSolo
        multiple
        renderTags={(value, props) => {
          return value.map((option, index) => (
            <Chip label={option} {...props({ index })} />
          ));
        }}
        renderInput={(params) => (
          <TextField label="Add people group" {...params} fullWidth />
        )}
      />
      <Button onClick={()=>shareFile(fileIPFSID,addresses)}>Share</Button>
    </Stack>
  );
}
function AccessList({ fileIPFSID }) {
  const { getAccessorOfFile } = useBlockchain();
  const [accessors, setAccessors] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getAccessorOfFile(fileIPFSID);
      setAccessors(data);
    })();
  }, [fileIPFSID]);
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

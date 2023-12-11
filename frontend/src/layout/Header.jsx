import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Header({ heading, children }) {
  return (
    <Stack flexDirection="row" marginY="1rem">
      <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
        {heading}
      </Typography>
      {children}
    </Stack>
  );
}

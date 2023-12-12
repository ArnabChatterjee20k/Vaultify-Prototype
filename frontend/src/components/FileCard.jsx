import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Description from "@mui/icons-material/Description";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import WalletProfilePicture from "./WalletProfilePicture";
import ActionMenu from "./ActionMenu";

export default function FileCard({ title, url, fileType,fileIPFSID }) {
  const isImage = fileType === "png";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<PictureAsPdf />}
        action={<ActionMenu fileIPFSID={fileIPFSID}/>}
        subheader={title}
        subheaderTypographyProps={{
          width: "150px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      />

      {isImage ? <ImagePreview url={url} /> : <OtherFilePreview />}

      <CardContent
        sx={{
          marginTop: "0.5rem",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <WalletProfilePicture />
        <Typography variant="body2" color="text.secondary">
          Last Opened
        </Typography>
      </CardContent>
    </Card>
  );
}

function ImagePreview({ url }) {
  return (
    <CardMedia
      component="img"
      image={url}
      sx={{ height: "8rem", objectFit: "cover" }}
    />
  );
}

function OtherFilePreview() {
  return (
    <CardMedia height="8rem">
      <Description
        sx={{ display: "block", marginX: "auto", fontSize: "8rem" }}
      />
    </CardMedia>
  );
}

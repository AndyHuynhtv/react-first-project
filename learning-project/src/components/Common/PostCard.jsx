import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { truncateText } from "../../utils/common";
export function MediaCard({
  title,
  author,
  description,
  imageUrl,
  createdAt,
  onEdit,
  onDelete,
  onGotoDetail,
}) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {truncateText(title, 20)}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {truncateText(description, 200)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            if (onEdit) {
              onEdit();
            }
          }}
          size="small"
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            onDelete?.();
          }}
          size="small"
        >
          Delete
        </Button>

        <Button
          onClick={() => {
            onGotoDetail?.();
          }}
          size="small"
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}

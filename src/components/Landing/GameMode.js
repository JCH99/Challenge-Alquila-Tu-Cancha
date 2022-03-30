import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function GameMode(props) {
  const stylesBase = { maxWidth: 300, minWidth: 200, m: 2 };

  const stylesSelected = {
    ...stylesBase,
    border: 4,
    borderColor: "secondary.main",
  };
  return (
    <Card sx={props.selected ? stylesSelected : stylesBase}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          alt={props.imgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

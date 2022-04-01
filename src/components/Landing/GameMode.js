import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Context } from "../../store/ContextProvider";
export default function GameMode(props) {
  const ctx = useContext(Context);

  const stylesBase = { maxWidth: 300, minWidth: 200, m: 2 };

  const stylesSelected = {
    ...stylesBase,
    border: 4,
    borderColor: "secondary.main",
  };

  return (
    <Card
      sx={ctx.gameMode === props.gameMode ? stylesSelected : stylesBase}
      onClick={() => ctx.addData(props.gameMode)}
    >
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

import { Typography, Box } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
const StepItem = (props) => {
  return (
    <Box
      component="li"
      sx={{ display: "flex", mb: 1, justifyContent: "center" }}
    >
      <SportsSoccerIcon color="primary" />
      <Typography sx={{ ml: 1 }}>{props.text}</Typography>
    </Box>
  );
};

export default StepItem;

import {
  Avatar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";

export default function SelectTeam(props) {
  return (
    <FormControl sx={{ minWidth: 150, mt: 2, mb: 4 }}>
      <InputLabel id="simple-select-label">Elegí un equipo</InputLabel>
      <Select
        labelId="select-team-label"
        id="select-team"
        value={props.team}
        label="Elegí un equipo"
        onChange={props.handleChange}
        autoWidth
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        {props.teams.map((item, index) => {
          return (
            <MenuItem value={item.key} key={`${index}`}>
              <Avatar
                variant="square"
                alt={`Cuadro de equipo ${item.name}`}
                sx={{
                  display: "inline-block",
                  width: 48,
                  height: 48,
                }}
                src={item.logo}
              />
              <Typography sx={{ ml: 0.5 }}>{item.name}</Typography>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

import * as React from "react";
import {
  Avatar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@mui/material";

export default function SelectLogo() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120, my: 2 }}>
      <InputLabel id="demo-simple-select-label">Elegí un escudo</InputLabel>
      <Select
        labelId="select-logo-label"
        id="select-logo"
        value={age}
        label="Elegí un escudo"
        onChange={handleChange}
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <MenuItem value={10}>
          <Avatar
            alt="Escudo de Futbol"
            sx={{
              mr: 1,
              display: "inline-block",
              width: 64,
              height: 64,
              mx: "auto",
            }}
            src="https://apiv3.apifootball.com/badges/549_tigre.jpg"
          />
        </MenuItem>
        <MenuItem value={10}>
          <Avatar
            alt="Escudo de Futbol"
            sx={{
              mr: 1,
              display: "inline-block",
              width: 64,
              height: 64,
              mx: "auto",
            }}
            src="https://apiv3.apifootball.com/badges/549_tigre.jpg"
          />
        </MenuItem>
        <MenuItem value={10}>
          <Avatar
            alt="Escudo de Futbol"
            sx={{
              mr: 1,
              display: "inline-block",
              width: 64,
              height: 64,
              mx: "auto",
            }}
            src="https://apiv3.apifootball.com/badges/549_tigre.jpg"
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
}

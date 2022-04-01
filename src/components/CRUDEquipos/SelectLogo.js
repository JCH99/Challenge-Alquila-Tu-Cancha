import React from "react";

import {
  Avatar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

export default function SelectLogo(props) {
  return (
    <FormControl sx={{ minWidth: 120, my: 2 }}>
      <InputLabel id="demo-simple-select-label">Elegí un escudo</InputLabel>
      <Select
        labelId="select-logo-label"
        id="select-logo"
        value={props.logo}
        label="Elegí un escudo"
        onChange={props.handleChange}
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        {props.logos.map((item, index) => {
          return (
            <MenuItem value={item} key={index}>
              <Avatar
                variant="square"
                alt="Escudo de Futbol"
                sx={{
                  mr: 1,
                  display: "inline-block",
                  width: 64,
                  height: 64,
                  mx: "auto",
                }}
                src={item}
              />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

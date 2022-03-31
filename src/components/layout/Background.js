import React from "react";
import { Box } from "@mui/material";
import texture from "../../images/texture.svg";
const Background = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2357a051' fill-opacity='0.25' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        minHeight: "100vh",
        backgroundPosition: "center",
      }}
    >
      {/* background by SVGBackgrounds.com */}
      {props.children}
    </Box>
  );
};

export default Background;

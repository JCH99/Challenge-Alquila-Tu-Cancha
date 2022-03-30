import * as React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Avatar,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <a href="https://alquilatucancha.com/">
                <Avatar alt="Alquila Tu Cancha logo" src={logo} />
              </a>
              <Typography variant="h6" component="h2" sx={{ pl: 1.5 }}>
                ATC Dream Match
              </Typography>
            </Box>
            <a href="https://github.com/JCH99/challenge-alquila-tu-cancha">
              <IconButton>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

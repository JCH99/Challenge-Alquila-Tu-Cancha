import { Typography, Box } from "@mui/material";
import GameMode from "./GameMode";
import modoAFA from "../../images/modoAFA.jpg";
import modoMundialista from "../../images/modoMundialista.jpg";
import StepItem from "./StepItem";
const Landing = () => {
  return (
    <section>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 2 }}>
        ATC Dream Match
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        ¿Alguna vez soñaste con ver un partido de fútbol en donde se enfrenten
        tus jugadores favoritos? Imaginate poder armar dos equipos de 5
        jugadores cada uno, en donde no tengas ninguna limitación. Con esta
        aplicación podrás realizarlo en 3 simples pasos.
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
        <StepItem text={"Elegí el modo de juego."} />
        <StepItem text={"Creá tus equipos con un nombre y un cuadro."} />
        <StepItem
          text={"¡Completa el dreamteam con los jugadores que quieras!"}
        />
      </Box>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Elegí el modo de juego
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <GameMode
          img={modoMundialista}
          imgAlt={"Modo de juego jugadores mundialistas"}
          title={"Jugadores Mundialistas"}
          description={
            "Podrás elegir 10 jugadores pertenecientes a los equipos clasificados al Mundial Qatar 2022."
          }
          gameMode={"modoMundialista"}
        />
        <GameMode
          img={modoAFA}
          imgAlt={"Modo de juego liga argentina"}
          title={"Jugadores Liga Argentina"}
          description={
            "Podrás elegir 10 jugadores pertenecientes a los equipos de la Primera División del Futbol Argentino."
          }
          gameMode={"modoAFA"}
        />
      </Box>
    </section>
  );
};

export default Landing;

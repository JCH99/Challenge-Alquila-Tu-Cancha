import { Typography, Box } from "@mui/material";
import GameMode from "./GameMode";
import modoAFA from "../../images/modoAFA.jpg";
import modoMundialista from "../../images/modoMundialista.jpg";

const Index = () => {
  return (
    <section>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 2 }}>
        ATC Dream Match
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nemo
        repellat voluptatem cumque! Corrupti doloribus beatae neque
        reprehenderit! Officiis ut beatae, officia excepturi vero ipsa corrupti
        reiciendis numquam sed, dolorem omnis enim dolorum natus, modi impedit
        placeat laboriosam perspiciatis architecto aut illo eaque blanditiis
        sint itaque necessitatibus. Minus officia atque alias voluptatem
        deleniti placeat quis molestias, quasi dignissimos nihil sunt dolore ab,
        eius quaerat, minima illo molestiae? Blanditiis, recusandae eligendi?
      </Typography>
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
            "sunt dolore ab, eius quaerat, minima illo molestiae? Blanditiis, sunt dolore ab, eius quaerat, minima illo molestiae? Blanditiis, sunt dolore ab, eius quaerat, minima illo molestiae? Blanditiis,"
          }
          gameMode={"modoMundialista"}
        />
        <GameMode
          img={modoAFA}
          imgAlt={"Modo de juego liga argentina"}
          title={"Jugadores Liga Argentina"}
          description={
            "sunt dolore ab, eius quaerat, minima illo molestiae? Blanditiis, sunt dolore ab, eius quaerat, minima illo molestiae? Blanditiis, sunt dolore ab, eius quaerat, minima illo molestiae? Blanditiis,"
          }
          gameMode={"modoAFA"}
        />
      </Box>
    </section>
  );
};

export default Index;

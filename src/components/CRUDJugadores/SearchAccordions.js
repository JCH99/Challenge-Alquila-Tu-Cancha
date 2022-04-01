import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Typography, Grid } from "@mui/material";
import ListPlayers from "../Team/ListPlayers";
const Player = (props) => {
  return (
    <Accordion
      expanded={props.expanded === `panel${props.index}`}
      onChange={props.handleChange(`panel${props.index}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${props.index}bh-content`}
        id={`panel${props.index}bh-header`}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://apiv3.apifootball.com/badges/536_argentina.jpg"
        />
        <Typography sx={{ alignSelf: "center", ml: 1 }}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <ListPlayers dense />
      </AccordionDetails>
    </Accordion>
  );
};

export default function SearchAccordions(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container component="ul" sx={{ p: 0 }} spacing={2}>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Newells Old"}
          index={1}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={2}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={3}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={4}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={5}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={6}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={7}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={8}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={9}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={10}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={11}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>
      <Grid item component="li" sx={{ listStyle: "none" }} xs={4}>
        <Player
          title={"Boca"}
          index={12}
          handleChange={handleChange}
          expanded={expanded}
        />
      </Grid>

      {/* {props.subjects.map((subject, index) => {
            return (
              <li
                className="sm:w-1/2 w-full flex justify-center"
                key={`${subject.title}${index}`}
              >
                <Subject
                  title={subject.title}
                  details={subject.details}
                  index={`${subject.title}${index}`}
                  handleChange={handleChange}
                  expanded={expanded}
                  approved={subject.approved}
                />
              </li>
            );
          })} */}
    </Grid>
  );
}

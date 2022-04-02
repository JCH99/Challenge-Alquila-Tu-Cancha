import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Typography, Grid } from "@mui/material";
import ListPlayers from "../Team/ListPlayers";
const Institution = (props) => {
  return (
    <Accordion
      expanded={props.expanded === `panel${props.index}`}
      onChange={props.handleChange(`panel${props.index}`)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${props.index}bh-content`}
        id={`panel${props.index}bh-header`}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Avatar variant="square" alt="Cuadro de Futbol" src={props.logo} />
        <Typography sx={{ alignSelf: "center", ml: 1 }}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <ListPlayers players={props.players} />
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
      {props.institutions.map((institution, index) => {
        return (
          <Grid
            item
            component="li"
            sx={{ listStyle: "none" }}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
          >
            <Institution
              title={institution.team_name}
              logo={institution.team_badge}
              players={institution.players}
              index={`index-${index}`}
              handleChange={handleChange}
              expanded={expanded}
            />
          </Grid>
        );
      })}

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

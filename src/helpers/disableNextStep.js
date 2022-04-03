const disableNextStep = (
  activeStep,
  gameMode,
  loadingData,
  teams,
  APIError
) => {
  let disableNextStep;
  let confirmedPlayers = 0;

  for (let team of teams) {
    confirmedPlayers += team.players.length;
  }

  if (activeStep === 0) {
    disableNextStep = loadingData || gameMode === undefined || APIError;
  } else if (activeStep === 1) {
    disableNextStep = teams.length < 2;
  } else if (activeStep === 2) {
    disableNextStep = confirmedPlayers < 10;
  } else {
    disableNextStep = false;
  }

  return disableNextStep;
};

export default disableNextStep;

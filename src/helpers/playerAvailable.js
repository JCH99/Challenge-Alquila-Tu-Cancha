export default function playerAvailable(playerId, teams) {
  const confirmedPlayers = teams.map((team) => team.players).flat();
  const playerAlreadyAdded =
    confirmedPlayers.findIndex((player) => player.id === playerId) === -1;
  return playerAlreadyAdded;
}

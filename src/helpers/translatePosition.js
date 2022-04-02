export default function translatePosition(position) {
  const positionLower = position.toLowerCase();
  let translatedPosition;
  if (positionLower === "goalkeepers") {
    translatedPosition = "Arquero";
  } else if (positionLower === "defenders") {
    translatedPosition = "Defensor";
  } else if (positionLower === "midfielders") {
    translatedPosition = "Mediocampista";
  } else if (positionLower === "forwards") {
    translatedPosition = "Delantero";
  } else {
    translatedPosition = "Comodín";
  }

  return translatedPosition;
}

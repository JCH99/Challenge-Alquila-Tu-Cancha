import { useReducer, createContext } from "react";

// (json api): institucion[]
// institucion: nombre, bandera, jugadores[]
// playerElegido: Nombre Imagen Posicion Id
// Team: Nombre, playerElegido[]

export const Context = createContext({
  gameMode: undefined,
  JSONData: [],
  teams: [],

  addJSON: (institutionsArray) => {},
  addTeam: (name) => {},
  removeTeam: (name) => {},
  editTeamName: (name, newName) => {},
  addPlayerToTeam: (team, playerObj) => {},
  removePlayerFromTeam: (team, playerId) => {},
});

const defaultState = {
  gameMode: "modoMundialista", //modoAFA || modoMundialista
  teams: [],
  data: [],
};

const reducer = (state, action) => {
  if (action.type === "ADD_DATA") {
  }

  if (action.type === "ADD_TEAM") {
  }

  if (action.type === "REMOVE_TEAM") {
  }

  if (action.type === "EDIT_TEAM") {
  }

  if (action.type === "ADD_PLAYER") {
  }

  if (action.type === "REMOVE_PLAYER") {
  }
  return state;
};

const ContextProvider = (props) => {
  const [state, dispatchAction] = useReducer(reducer, defaultState);

  const addDataHandler = (institutionsArray) => {
    dispatchAction({ type: "ADD_DATA", institutionsArray });
  };
  const addTeamHandler = (name) => {
    dispatchAction({ type: "ADD_TEAM", name });
  };
  const removeTeamHandler = (name) => {
    dispatchAction({ type: "REMOVE_TEAM", name });
  };
  const editTeamNameHandler = (name, newName) => {
    dispatchAction({ type: "EDIT_TEAM", name, newName });
  };
  const addPlayerToTeamHandler = (team, playerObj) => {
    dispatchAction({ type: "ADD_PLAYER", team, playerObj });
  };
  const removePlayerFromTeamHandler = (team, playerId) => {
    dispatchAction({ type: "REMOVE_PLAYER", team, playerId });
  };

  const context = {
    gameMode: state.gameMode,
    data: state.data,
    teams: state.teams,
    addData: addDataHandler,
    addTeam: addTeamHandler,
    removeTeam: removeTeamHandler,
    editTeamName: editTeamNameHandler,
    addPlayerToTeam: addPlayerToTeamHandler,
    removePlayerFromTeam: removePlayerFromTeamHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default ContextProvider;

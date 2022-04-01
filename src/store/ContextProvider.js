import { useReducer, createContext } from "react";

// (json api): institucion[]
// institucion: nombre, bandera, jugadores[]
// playerElegido: Nombre Imagen Posicion Id
// Team: Nombre, Cuadro, players[]

export const Context = createContext({
  data: [],
  teams: [],
  gameMode: undefined,

  addData: (gameMode) => {},
  addTeam: (name) => {},
  removeTeam: (name) => {},
  editTeamName: (name, newName) => {},
  addPlayerToTeam: (team, playerObj) => {},
  removePlayerFromTeam: (team, playerId) => {},
});

const defaultState = {
  gameMode: undefined,
  teams: [],
  data: [],
};

const reducer = (state, action) => {
  if (action.type === "ADD_DATA") {
    return {
      ...state,
      data: action.data,
    };
  }
  if (action.type === "CHANGE_GAME_MODE") {
    return {
      ...state,
      gameMode: action.gameMode,
    };
  }

  if (action.type === "ADD_TEAM") {
    const teamsUpdated = [...state.teams];
    teamsUpdated.push({
      name: action.name,
      logo: action.logo,
      players: [],
    });

    return {
      ...state,
      teams: teamsUpdated,
    };
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

  const addDataHandler = async (gameMode) => {
    //prevent re-fetching when selecting current selected mode.
    if (gameMode !== state.gameMode) {
      dispatchAction({ type: "CHANGE_GAME_MODE", gameMode });
      let leagueId;

      if (gameMode === "modoAFA") {
        leagueId = 44;
      } else if (gameMode === "modoMundialista") {
        leagueId = 28;
      } else {
        leagueId = -1; //error
      }

      try {
        const response = await fetch(
          `https://apiv3.apifootball.com/?action=get_teams&league_id=${leagueId}&APIkey=${process.env.REACT_APP_API_KEY}`
        );

        const data = await response.json();

        if (data.hasOwnProperty("error")) {
          throw new Error("Request failed");
        }

        dispatchAction({ type: "ADD_DATA", data });
      } catch (err) {}
    }
  };
  const addTeamHandler = (name, logo) => {
    if (state.teams.length < 2) {
      dispatchAction({ type: "ADD_TEAM", name, logo });
    }
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

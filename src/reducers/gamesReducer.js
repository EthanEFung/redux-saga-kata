import {
  GET_YESTERDAYS_GAMES_REQUEST,
  GET_TODAYS_GAMES_REQUEST,
  GET_TOMORROWS_GAMES_REQUEST,
  GET_YESTERDAYS_GAMES_RESPONSE,
  GET_TODAYS_GAMES_RESPONSE,
  GET_TOMORROWS_GAMES_RESPONSE,
} from '../constants/games';

const initialState = {
  games: [],
  nGames: 0,
}

const initialAction = {
  type: '',
  payload: undefined,
}

function gamesReducer(
  state = initialState,
  action = initialAction,
) {
  const { type, payload } = action;
  switch (type) {
    // requests reset the state
    case GET_YESTERDAYS_GAMES_REQUEST:
    case GET_TODAYS_GAMES_REQUEST:
    case GET_TOMORROWS_GAMES_REQUEST:
      return {...initialState};


    case GET_YESTERDAYS_GAMES_RESPONSE:
    case GET_TODAYS_GAMES_RESPONSE:
    case GET_TOMORROWS_GAMES_RESPONSE:
      if (!payload.games) return initialState;
      return {
        ...state,
        games: payload.games,
        nGames: payload.numGames
      }


    default:
      return state;
  }  
}

export default gamesReducer;

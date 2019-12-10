import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_TODAYS_GAMES_REQUEST, GET_TODAYS_GAMES_RESPONSE } from '../constants/games';
import formatDate from '../utils/formatDate';

export async function getJSON() {
  const today = new Date(Date.now());
  const response = await fetch(`/games/${formatDate(today)}`);
  return response.json();
}

export function *fetchTodaysGames() {
  const games = yield call(getJSON);
  yield put({ type: GET_TODAYS_GAMES_RESPONSE, payload: games });
}

export function *watchTodaysGames() {
  yield takeEvery(GET_TODAYS_GAMES_REQUEST, fetchTodaysGames);
}

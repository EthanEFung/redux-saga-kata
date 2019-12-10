import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_TOMORROWS_GAMES_REQUEST, GET_TOMORROWS_GAMES_RESPONSE } from '../constants/games';
import formatDate from '../utils/formatDate';

export async function getJSON() {
  let tomorrow = new Date(Date.now());
  tomorrow.setDate(tomorrow.getDate() + 1);
  const response = await fetch(`/games/${formatDate(tomorrow)}`);
  return response.json();
}

export function* fetchTomorrowsGames() {
  const games = yield call(getJSON);
  yield put({ type: GET_TOMORROWS_GAMES_RESPONSE, payload: games });
}

export function* watchTomorrowsGames() {
  yield takeEvery(GET_TOMORROWS_GAMES_REQUEST, fetchTomorrowsGames);
}

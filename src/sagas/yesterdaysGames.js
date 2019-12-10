import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_YESTERDAYS_GAMES_REQUEST, GET_YESTERDAYS_GAMES_RESPONSE } from '../constants/games';
import formatDate from '../utils/formatDate';

export async function getJSON() {
  let yesterday = new Date(Date.now());
  yesterday.setDate(yesterday.getDate() - 1);
  const response = await fetch(`/games/${formatDate(yesterday)}`);
  return response.json();
}

export function* fetchYesterdaysGames() {
  const games = yield call(getJSON);
  yield put({ type: GET_YESTERDAYS_GAMES_RESPONSE, payload: games });
}

export function* watchYesterdaysGames() {
  yield takeEvery(GET_YESTERDAYS_GAMES_REQUEST, fetchYesterdaysGames);
}

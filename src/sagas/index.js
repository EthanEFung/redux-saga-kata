

import { all } from 'redux-saga/effects';
import { watchYesterdaysGames } from './yesterdaysGames';
import { watchTodaysGames } from './todaysGames';
import { watchTomorrowsGames } from './tomorrowsGames';

function* rootSaga() {
  yield all([
    watchYesterdaysGames(),
    watchTodaysGames(),
    watchTomorrowsGames(),
  ]);
}

export default rootSaga;

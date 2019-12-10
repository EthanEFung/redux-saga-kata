import { call, put } from 'redux-saga/effects';
import { getJSON, fetchYesterdaysGames, } from './yesterdaysGames';
import { GET_YESTERDAYS_GAMES_RESPONSE } from '../constants/games';

describe('fetchYesterdaysGames', () => {
  let gen = fetchYesterdaysGames();

  it('first fetches json data from nba stats', () => {
    const actual = gen.next().value;
    const expected = call(getJSON);
    expect(actual).toEqual(expected);
  });

  it('then dispatches a GET_YESTERDAYS_GAMES_RESPONSE action', () => {
    const actual = gen.next().value;
    const expected = put({ type: GET_YESTERDAYS_GAMES_RESPONSE })
    expect(actual).toEqual(expected);
  });

  it('does nothing else', () => {
    expect(gen.next().done).toBeTruthy();
  });
});
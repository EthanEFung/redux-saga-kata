import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../../organisms/Page/Page';

const getTriCode = ({
  triCode = '   ',
}) => {
  return triCode;
}

const getScore = ({
  score = '0'
}) => {
  return score;
}

const getArenaName = ({
  name = '',
  city = '',
}) => {
  return name + ' in ' + city;
}

const renderGame = ({
  arena = {},
  hTeam = {},
  vTeam = {},
}, index) => {

  return <p key={index}>
    <span>{getTriCode(hTeam) + ' v ' + getTriCode(vTeam)} </span>
    <span>{getScore(hTeam) + ' - ' + getScore(vTeam)}</span>
    <span>{' at ' + getArenaName(arena)}</span>
  </p>
}

const renderGames = (games = []) => {
  return <>
    {games.map(renderGame)}
  </>
}

const MainPage = () => {
  const {
    games = [],
  } = useSelector(state => state.games);
  return <Page>
    {renderGames(games)}
  </Page>
}

export default MainPage;

import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './navigationBar.module.css';
import Button from '../../atoms/Button/Button';



const NavigationBar = (props) => {
  const dispatch = useDispatch();

  return <nav className={classes.nav}>
    <Button onClick={() => dispatch({type: 'GET_YESTERDAYS_GAMES_REQUEST'})}>Yesterdays Games</Button>
    <Button onClick={() => dispatch({type: 'GET_TODAYS_GAMES_REQUEST'})}>Todays Games</Button>
    <Button onClick={() => dispatch({type: 'GET_TOMORROWS_GAMES_REQUEST'})}>Tomorrows Games</Button>
  </nav>
}

export default NavigationBar;

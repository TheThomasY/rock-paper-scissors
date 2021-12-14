import React, { useState, useEffect } from 'react';
import './SCSS/BattleBoard.css';

import CreateAnIcon from '../components/pieces/CreateAnIcon';

export default function PlayedBoard(props) {
  const [gameResult, setGameResult] = useState('');

  let playerPick = props.picks.player;
  let housePick = props.picks.house;

  const thisBeatsThat = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  useEffect(() => {
    // On component mount, make house pick
    props.onHousePick();
  }, []);

  useEffect(() => {
    if (thisBeatsThat[playerPick] === housePick) {
      setGameResult('win');
    } else if (thisBeatsThat[housePick] === playerPick) {
      setGameResult('lose');
    } else if (housePick !== '') {
      setGameResult('draw');
    }
  }, [playerPick, housePick]);

  const playAgainHandler = () => {
    props.onPlayAgain(gameResult);
  };

  return (
    <div className='battle-board-and-result'>
      <div className='battle-board'>
        <div className='bb-picked bb-you-picked'>
          <CreateAnIcon iconType={playerPick} />
          <div className='picked-by-label'>You Picked</div>
        </div>
        <div className='result-div'>
          <div className='result'>YOU {gameResult}</div>
          <div onClick={playAgainHandler} className='play-again-btn'>
            PLAY AGAIN
          </div>
        </div>
        <div className='bb-picked bb-house-picked'>
          <div className='bb-empty'></div>
          <CreateAnIcon iconType={housePick} />
          <div className='picked-by-label'>The House Picked</div>
        </div>
      </div>
    </div>
  );
}

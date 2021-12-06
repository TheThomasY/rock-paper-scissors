import './SCSS/BattleBoard.css';

import CreateAnIcon from '../components/pieces/CreateAnIcon';

export default function PlayedBoard() {
  let playerPick = 'rock';
  let housePick = '';

  return (
    <div className='battle-board'>
      <div className='bb-picked bb-you-picked'>
        {playerPick === '' ? (
          <div className='bb-empty'></div>
        ) : (
          <CreateAnIcon iconType={playerPick} />
        )}
        <div className='picked-by-label'>You Picked</div>
      </div>
      <div className='bb-picked bb-house-picked'>
        {housePick === '' ? (
          <div className='bb-empty'></div>
        ) : (
          <CreateAnIcon iconType={housePick} />
        )}
        <div className='picked-by-label'>The House Picked</div>
      </div>
    </div>
  );
}

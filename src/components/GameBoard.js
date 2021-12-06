import './SCSS/GameBoard.css';

import CreateAnIcon from './pieces/CreateAnIcon';

export default function GameBoard(props) {
  return (
    <div className='game-board'>
      <div className='gb-top'>
        <CreateAnIcon iconType={'paper'} onPlayerPick={props.onPlayerPick} />
        <CreateAnIcon iconType={'scissors'} onPlayerPick={props.onPlayerPick} />
      </div>
      <div className='gb-bottom'>
        <CreateAnIcon iconType={'rock'} onPlayerPick={props.onPlayerPick} />
      </div>
    </div>
  );
}

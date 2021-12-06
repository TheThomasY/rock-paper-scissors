import './SCSS/GameBoard.css';
import paperIcon from '../assets/images/icon-paper.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';
import rockIcon from '../assets/images/icon-rock.svg';

import CreateAnIcon from './pieces/CreateAnIcon';

export default function GameBoard() {
  return (
    <div className='game-board'>
      <div className='gb-top'>
        <CreateAnIcon iconType={'paper'} />
        <CreateAnIcon iconType={'scissors'} />
      </div>
      <div className='gb-bottom'>
        <CreateAnIcon iconType={'rock'} />
      </div>
    </div>
  );
}

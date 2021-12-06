import './SCSS/BattleBoard.css';
import paperIcon from '../assets/images/icon-paper.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';
import rockIcon from '../assets/images/icon-rock.svg';

import CreateAnIcon from '../components/pieces/CreateAnIcon';

export default function PlayedBoard() {
  return (
    <div className='battle-board'>
      <div className='bb-picked bb-you-picked'>
        {/* <div className='bb-empty'></div> */}
        <CreateAnIcon iconType={'rock'} />
        <div className='picked-by-label'>You Picked</div>
      </div>
      <div className='bb-picked bb-house-picked'>
        {/* <div className='bb-empty'></div> */}
        <CreateAnIcon iconType={'paper'} />
        <div className='picked-by-label'>The House Picked</div>
      </div>
    </div>
  );
}

import './SCSS/GameBoard.css';
import paperIcon from '../assets/images/icon-paper.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';
import rockIcon from '../assets/images/icon-rock.svg';

export default function GameBoard() {
  return (
    <div className='game-board'>
      <div className='gb-top'>
        <div className='gb-piece-bg gb-bg-paper'>
          <div className='gb-piece gb-paper'></div>
          <img className='gb-piece-icon' src={paperIcon} alt='Icon for paper' />
        </div>
        <div className='gb-piece-bg gb-bg-scissors'>
          <div className='gb-piece gb-scissors'></div>
          <img
            className='gb-piece-icon'
            src={scissorsIcon}
            alt='Icon for scissors'
          />
        </div>
      </div>
      <div className='gb-bottom'>
        <div className='gb-piece-bg gb-bg-rock'>
          <div className='gb-piece gb-rock'></div>
          <img className='gb-piece-icon' src={rockIcon} alt='Icon for rock' />
        </div>
      </div>
    </div>
  );
}

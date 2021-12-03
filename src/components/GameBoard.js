import './SCSS/GameBoard.css';

export default function GameBoard() {
  return (
    <div className='game-board'>
      <div className='gb-top'>
        <div className='gb-piece-bg gb-bg-paper'>
          <div className='gb-piece gb-paper'></div>
        </div>
        <div className='gb-piece-bg gb-bg-scissors'>
          <div className='gb-piece gb-scissors'></div>
        </div>
      </div>
      <div className='gb-bottom'>
        <div className='gb-piece-bg gb-bg-rock'>
          <div className='gb-piece gb-rock'></div>
        </div>
      </div>
    </div>
  );
}

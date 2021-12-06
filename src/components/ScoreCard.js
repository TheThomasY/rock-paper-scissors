import './SCSS/ScoreCard.css';
import logo from '../assets/images/logo.svg';

export default function ScoreCard() {
  let currentScore = 0;

  return (
    <div>
      <div className='title-card'>
        <img
          className='header-logo'
          src={logo}
          alt='Rock paper scissors logo'
        />
        <div className='score-tile'>
          <div className='score-tile-title'>SCORE</div>
          <div className='score-tile-data'>{currentScore}</div>
        </div>
      </div>
    </div>
  );
}

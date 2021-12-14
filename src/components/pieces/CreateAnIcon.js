import paperIcon from '../../assets/images/icon-paper.svg';
import scissorsIcon from '../../assets/images/icon-scissors.svg';
import rockIcon from '../../assets/images/icon-rock.svg';

import '../SCSS/pieces/CreateAnIcon.css';

export default function PaperIcon(props) {
  let iconOuterColour = 'gb-piece-bg gb-bg-' + props.iconType;

  const iconClickHandler = () => {
    if (props.gameState === 'player-pick') {
      props.onPlayerPick(props.iconType);
    }
  };

  return (
    <div className={iconOuterColour} onClick={iconClickHandler}>
      <div className='gb-piece'></div>
      {props.iconType === 'paper' && (
        <img className='gb-piece-icon' src={paperIcon} alt='Icon for paper' />
      )}
      {props.iconType === 'scissors' && (
        <img
          className='gb-piece-icon'
          src={scissorsIcon}
          alt='Icon for scissors'
        />
      )}
      {props.iconType === 'rock' && (
        <img className='gb-piece-icon' src={rockIcon} alt='Icon for rock' />
      )}
    </div>
  );
}

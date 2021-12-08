import React, { useState } from 'react';
import ScoreCard from './components/ScoreCard';
import GameBoard from './components/GameBoard';
import BattleBoard from './components/BattleBoard';
import Rules from './components/Rules';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('player-pick');
  const [picks, setPicks] = useState({
    player: '',
    house: '',
  });
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const pickOptions = ['rock', 'paper', 'scissors'];

  const startBattle = (playerPick) => {
    setPicks((prevPicks) => {
      return { ...prevPicks, player: playerPick };
    });
    setGameState('battle');
  };

  const houseToPick = () => {
    let housePick = pickOptions[Math.floor(Math.random() * 3)];
    setPicks((prevPicks) => {
      return { ...prevPicks, house: housePick };
    });
  };

  const playAgain = () => {
    setGameState('player-pick');
    setPicks({
      player: '',
      house: '',
    });
  };

  const toggleRules = () => {
    showRules ? setShowRules(false) : setShowRules(true);
  };

  return (
    <div>
      <ScoreCard score={score} />
      {gameState === 'player-pick' && <GameBoard onPlayerPick={startBattle} />}
      {gameState === 'battle' && (
        <BattleBoard
          picks={picks}
          onHousePick={houseToPick}
          onPlayAgain={playAgain}
        />
      )}
      <Rules onToggleRules={toggleRules} showRules={showRules} />
    </div>
  );
}

export default App;

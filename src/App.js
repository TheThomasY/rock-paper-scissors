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
  const [showRules, setShowRules] = useState(false);

  const pickOptions = ['rock', 'paper', 'scissors'];

  const startBattle = (playerPick) => {
    let housePick = pickOptions[Math.floor(Math.random() * 3)];
    setPicks({
      player: playerPick,
      house: housePick,
    });
    setGameState('battle');
  };

  const toggleRules = () => {
    showRules ? setShowRules(false) : setShowRules(true);
  };

  return (
    <div>
      <ScoreCard />
      {gameState === 'player-pick' && <GameBoard onPlayerPick={startBattle} />}
      {gameState === 'battle' && <BattleBoard picks={picks} />}
      <Rules onToggleRules={toggleRules} showRules={showRules} />
    </div>
  );
}

export default App;

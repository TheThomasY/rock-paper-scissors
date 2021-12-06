import React, { useState } from 'react';
import ScoreCard from './components/ScoreCard';
import GameBoard from './components/GameBoard';
import BattleBoard from './components/BattleBoard';
import Rules from './components/Rules';
import './App.css';

function App() {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    showRules ? setShowRules(false) : setShowRules(true);
  };

  return (
    <div>
      <ScoreCard />
      <GameBoard />
      <BattleBoard />
      <Rules onToggleRules={toggleRules} showRules={showRules} />
    </div>
  );
}

export default App;

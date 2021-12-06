import React, { useState } from 'react';
import ScoreCard from './components/ScoreCard';
import GameBoard from './components/GameBoard';
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
      <Rules onToggleRules={toggleRules} showRules={showRules} />
    </div>
  );
}

export default App;

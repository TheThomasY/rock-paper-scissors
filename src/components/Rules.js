import React from 'react';
import './SCSS/Rules.css';
import rulesImg from '../assets/images/image-rules.svg';
import rulesCloseIcon from '../assets/images/icon-close.svg';

export default function Rules(props) {
  let showRules = props.showRules;

  const toggleRulesHandler = () => {
    props.onToggleRules();
  };

  return (
    <div className='rules-component'>
      {!showRules ? (
        <div onClick={toggleRulesHandler} className='rules-btn'>
          RULES
        </div>
      ) : (
        <div className='rules-full-page'>
          <div className='rules-fp-title'>RULES</div>
          <img
            className='rules-fp-img'
            src={rulesImg}
            alt='Image showing the rules of rock paper scissors'
          />
          <img
            onClick={toggleRulesHandler}
            className='rules-fp-close'
            src={rulesCloseIcon}
            alt='Close rules button'
          />
        </div>
      )}
    </div>
  );
}

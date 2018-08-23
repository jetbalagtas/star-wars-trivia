import React from 'react';

import classes from './Character.css';

const character = (props) => {
  return (
    <div className={classes.Character}>
      <h2>{props.characters}</h2>
    </div>
  );
};

export default character;

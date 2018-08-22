import React from 'react';

import classes from './Character.css';

const character = (props) => (
  <div className={classes.Character}>
    <h2>{props.name}</h2>
  </div>
);

export default character;

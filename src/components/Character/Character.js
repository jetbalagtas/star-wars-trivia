import React from 'react';

import classes from './Character.css';

const character = (props) => {
  console.log('props: ', props);
  return (
    <div className={classes.Character}>
      <h2 id={props.character.key}>{props.character.name}</h2>
    </div>
  );
};
  
export default character;

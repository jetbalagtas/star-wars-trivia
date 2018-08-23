import React from 'react';

import classes from './Character.css';

const character = (props) => {
  console.log('props: ', props);
  return (
    <div className={classes.Character}>
      <h2>{props.character}</h2>
    </div>
  );
};
  
export default character;

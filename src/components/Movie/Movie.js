import React from 'react';

import classes from './Movie.css';

const movie = (props) => (
  <div className={classes.Movie}>
    <h2>{props.title}</h2>
  </div>
);

export default movie;

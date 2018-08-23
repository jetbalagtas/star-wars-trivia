import React, { Component } from 'react';

import Movie from '../../components/Movie/Movie';
import classes from './Movies.css';

class Movies extends Component {
  state = {
    title: 'Star Wars: A New Hope'
  }

  render () {
    return (
      <div className={classes.Movies}>
        <h1>Movies</h1>
        <ul className={classes.Movie}>
          <li>
            <Movie title={this.state.title} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Movies;

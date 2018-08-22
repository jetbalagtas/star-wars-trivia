import React, { Component } from 'react';

import Character from '../../components/Character/Character';
import classes from './Characters.css';

class Characters extends Component {
  state = {
    name: 'Luke',
  }

  render () {
    return (
      <div className={classes.Characters}>
        <h1>Characters</h1>
        <ul className={classes.Character}>
          <li>
            <Character name={this.state.name} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Characters;

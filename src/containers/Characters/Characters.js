import React, { Component } from 'react';

import Character from '../../components/Character/Character';
// import axios from '../../axios-swapi';
import classes from './Characters.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Characters extends Component {
  state = {
    loading: true
  };

  componentDidMount () {
    this.setState({
      characters: this.props.characters,
      loading: false
    });
  };

  render () {
    let characters = <Spinner />
    if (!this.state.loading && this.props.characters) {
      console.log('[CharactersArr]', this.props.characters);
      
      characters = this.props.characters.map(char => (
        <Character
          character={char}
          key={char.name} />
      ));
    };
    return (
      <div className={classes.Characters}>
        <h1>Characters</h1>
        <ul className={classes.Character}>
          <li>
            {characters}
          </li>
        </ul>
      </div>
    );
  };
};

export default Characters;

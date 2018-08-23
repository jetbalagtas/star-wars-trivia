import React, { Component } from 'react';

import Character from '../../components/Character/Character';
import axios from '../../axios-swapi';
import classes from './Characters.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Characters extends Component {
  state = {
    characters: [],
    loading: true
  }

  componentDidMount () {
    axios.get('people/?format=json')
    .then(res => {
      console.log(res);
      const fetchedCharacters = [];
      for (let key in res.data.results) {
        fetchedCharacters.push({
          ...res.data.results[key],
          id: key
        });
      }
      console.log('fetchedCharacters: ', fetchedCharacters);
      this.setState({loading: false, characters: fetchedCharacters});
    })
    .catch(err => {
      this.setState({loading: false});
    });
  };

  render () {
    let characters = <Spinner />
    if (!this.state.loading) {
      characters = this.state.characters.map(char => (
        <Character
          key={char.id}
          character={char.name} />
      ));
    }
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
  }
}

export default Characters;

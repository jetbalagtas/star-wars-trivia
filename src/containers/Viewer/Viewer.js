import React, { Component } from 'react';
import { connect } from 'react-redux';

import Characters from '../Characters/Characters';
import Movies from '../Movies/Movies';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-swapi';
import * as actions from '../../store/actions/index';

class Viewer extends Component {

  componentDidMount () {
    this.props.onInitCharacters();
  }
  
  render () {
    console.log(this.props.chars);
    return (
      <Aux>
        <Characters characters={this.props.chars} />
        <Movies />
      </Aux>
    );
  };
};

const mapStateToProps = state => {
  return {
    chars: state.characters.characters,
    movs: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowCharactersMovies: (char) => dispatch(actions.showCharactersMovies(char)),
    onShowCharactersList: () => dispatch(actions.showCharactersList()),
    onInitCharacters: () => dispatch(actions.initCharacters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Viewer, axios));

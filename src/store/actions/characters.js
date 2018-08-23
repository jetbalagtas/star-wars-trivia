import * as actionTypes from './actionTypes';
import axios from '../../axios-swapi';

export const showCharactersMovies = (character) => {
  return {
    type: actionTypes.SHOW_CHARACTERS_MOVIES,
    characterName: character
  };
};

export const showCharactersList = () => {
  return {
    type: actionTypes.SHOW_CHARACTERS_LIST,
  };
};

export const setCharacters = (characters) => {
  return {
    type: actionTypes.SET_CHARACTERS,
    characters: characters
  };
};

export const fetchCharactersFailed = () => {
  return {
    type: actionTypes.FETCH_CHARACTERS_FAILED
  };
};

export const initCharacters = () => {
  return dispatch => {
    axios.get('people/?format=json')
    .then(res => {
      dispatch(setCharacters(res.data.results));
    })
    .catch(err => {
      dispatch(fetchCharactersFailed());
    });
  };
};

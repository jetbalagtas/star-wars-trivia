import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../store/utility';

const initialState = {
  characters: null,
  movies: null,
  error: false
}

const showCharactersMovies = (state, action) => {
  const updatedState = {

  };
  return updateObject(state, updatedState);
};

const showCharactersList = (state, action) => {
  const updatedState = {

  };
  return updateObject(state, updatedState);
};

const setCharacters = (state, action) => {
  console.log(action.characters);
  return updateObject(state, {
    characters: action.characters,
    error: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_CHARACTERS_MOVIES: return showCharactersMovies(state, action);
    case actionTypes.SHOW_CHARACTERS_LIST: return showCharactersList(state, action);
    case actionTypes.SET_CHARACTERS: return setCharacters(state, action);
    default: return state;
  }
};

export default reducer;

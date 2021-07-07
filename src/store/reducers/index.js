import { combineReducers } from 'redux';
import search from './charList';
import getChar from './charId'

const reducers = combineReducers({
  search,
  getChar
});

export default reducers;
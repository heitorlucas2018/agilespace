import { combineReducers } from 'redux';
import Board from './reducers/board';
import Sidbar from './reducers/sidbar';

export default combineReducers({
    Board,
    Sidbar
});
import { createStore} from 'redux';
import combineReducers from './unionReduces';

export default createStore(combineReducers);
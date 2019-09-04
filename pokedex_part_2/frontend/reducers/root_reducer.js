import { combineReducers } from 'redux';
import entities from './entities_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer
});

export default rootReducer

import hookUserRegisterReducer from './hookuserregister';
import { combineReducers } from 'redux';

//all of the reducers go here
const rootReducers = combineReducers({
    landing_email: hookUserRegisterReducer
});

export default rootReducers;
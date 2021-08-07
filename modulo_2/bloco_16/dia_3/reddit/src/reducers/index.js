import { combineReducers } from 'redux';

import loginReducer from './login';
import registerReducer from './register';

const rootReducers = combineReducers({
  loginReducer,
  registerReducer,
});

export default rootReducers;

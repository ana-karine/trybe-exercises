import { createStore } from 'redux';
import form from '../reducers/index';

const store = createStore(form, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
import { createStore } from 'redux';

import allReducers from './reducers/allReducers'



export default createStore(
    allReducers,
    { cart: [] },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
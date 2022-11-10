import { combineReducers, createStore } from 'redux';
import { bookTicketsReducer } from './reducer/bookTicketsReducer';

const rootReducer = combineReducers({
    bookTicketsReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
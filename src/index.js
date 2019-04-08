import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


// Going into my reducer function we have the previous state & an action
// need to return back what the new state should be
const feelingReducer = (state = '', action) => {
    // No need to spread, because we are getting a new array from server 
    // and it has all the things we want in it (don't want doubles)
    if (action.type === 'ADD_FEELINGS') {
        console.log('ADDING FEELINGS');
        return action.payload
    }
    if (action.type === "EMPTY") {
        return state = '';
    }
    // If it isn't this reducer's action, just return what came in as state
    // no changes so no need to update state and cause re-render
    return state;
}

// ""
const understandingReducer = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        console.log('ADDING UNDERSTANDINGS');
        return action.payload
    }
    if (action.type === "EMPTY") {
        return state = '';
    }
    return state;
}

//""
const supportReducer = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT') {
        console.log('ADDING SUPPORT');
        return action.payload
    }
    if (action.type === "EMPTY") {
        return state = '';
    }
    return state;
}

// ""
const commentReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENT') {
        console.log('ADDING COMMENT');
        return action.payload
    }
    if (action.type === "EMPTY") {
        return state = '';
    }
    return state;
}


let storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

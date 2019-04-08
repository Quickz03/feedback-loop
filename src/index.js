import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';



const feelingReducer = (state = '', action) => {
    if (action.type === 'ADD_FEELINGS') {
        console.log('ADDING FEELINGS');
        return action.payload
    }
    return state;
}


const understandingReducer = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        console.log('ADDING UNDERSTANDINGS');
        return action.payload
    }
    return state;
}

const supportReducer = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT') {
        console.log('ADDING SUPPORT');
        return action.payload
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENT') {
        console.log('ADDING COMMENT');
        return action.payload
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

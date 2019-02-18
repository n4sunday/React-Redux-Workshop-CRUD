import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from 'redux';
import commentReducer from './commentReducer';
import {Provider} from 'react-redux';

const store = createStore(commentReducer); //Creact Store

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);

/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import dogReducer from './reducers/dog-reducer';
// import BarkMessage from './containers/bark-message';
// import BarkButton from './containers/bark-button';
import ReactMarkdown from 'react-markdown';
import { CONTENT } from '../../_posts/welcome';
/*
const store = createStore(combineReducers({
    dog: dogReducer,
}));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <BarkMessage />
            <BarkButton />
        </div>
    </Provider>
    , document.querySelector('.app')
);
*/


ReactDOM.render(
    <div>
        <ReactMarkdown source={CONTENT} />
    </div>
    , document.querySelector('.app')
);

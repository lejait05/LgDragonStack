import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import rootReducer from './reducers';
import Root from './components/Root';
import {configureStore} from '@reduxjs/toolkit';
import './index.css';


// export default function configureStore(preloadedState){
//     // const middlewares = [loggerMiddleware, thunk]
//     const middlewareEnhancer = applyMiddleware(thunk)
//     const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//     const composedEnhancers = composeWithDevTools(...enhancers)
//
//     const store = createStore(rootReducer, preloadedState, composedEnhancers)
//     return store
// }

const store = configureStore({
    reducer: rootReducer
});

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);



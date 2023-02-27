import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
import {createBrowserHistory} from "history";
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';

import {configureStore} from '@reduxjs/toolkit';
import {fetchAuthenticated} from './actions/account';
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
const history = createBrowserHistory();


const store = configureStore({
    reducer: rootReducer
});
store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Root}/>
                        <Route path='/account-dragons' component={AccountDragons}/>
                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    });




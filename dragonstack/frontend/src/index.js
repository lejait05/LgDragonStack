import React from 'react';
import {createRoot, render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {Router, Route, Switch, redirect, Routes} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import history from "./history";
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import PublicDragons from './components/PublicDragons';
import {configureStore} from '@reduxjs/toolkit';
import {fetchAuthenticated} from './actions/account';
import './index.css';
import root from "./components/Root";
import * as PropTypes from "prop-types";


const store = configureStore({
    reducer: rootReducer
});


const AuthRoute = props => {
    if (!store.getState().account.loggedIn) {
        return <Redirect to={{pathname: '/'}}/>

    }

    const {element, path} = props;
    return <Route path={path} element={element}/>
}


store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    {/*<Switch>*/}
                    <Routes>
                        <Route exact path='/' element={<Root/>}/>
                        <AuthRoute path='/account-dragons' element={<AccountDragons/>}/>
                        <AuthRoute path='/public-dragons' element={<PublicDragons/>}/>
                        {/*</Switch>*/}
                    </Routes>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    });




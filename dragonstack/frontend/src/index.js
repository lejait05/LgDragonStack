import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route,  Routes} from 'react-router-dom';
import history from "./history";
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import PublicDragons from './components/PublicDragons';
import {configureStore} from '@reduxjs/toolkit';
import {fetchAuthenticated} from './actions/account';
import './index.css';
import * as PropTypes from "prop-types";
// import Generation from './components/Generation';
// import Dragon from './components/Dragon';
// import {createStore, applyMiddleware} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';


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




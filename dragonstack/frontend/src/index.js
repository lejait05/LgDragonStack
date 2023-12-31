import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {Route,Router, Routes, Navigate, createBrowserRouter} from 'react-router-dom';
import rootReducer from './reducers';
import history from "./history";
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import PublicDragons from './components/PublicDragons';
import {fetchAuthenticated} from './actions/account';
import './index.css';

const router = createBrowserRouter([{
        path: '/',
        element: <Root/>
    }]
);

const store = configureStore({
    reducer: rootReducer
})
const AuthRoute = props => {
    if (!store.getState().account.loggedIn) {
        return <Navigate to={{pathname: '/'}}/>
    }
    const {element, path} = props;
    return <Route path={path} element={element}/>
}

store.dispatch(fetchAuthenticated())
    .then(() => {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Routes>
                        <Route path='/' element={<Root/>}/>
                        <AuthRoute path='/account-dragons' element={<AccountDragons/>}/>
                        <AuthRoute path='/public-dragons' element={<PublicDragons/>}/>
                    </Routes>
                </Router>
            </Provider>,
                document.getElementById('root')
        );
    });

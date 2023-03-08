import React from 'react';
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Routes, useParams} from 'react-router-dom';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
import navigate from './navigate';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import PublicDragons from './components/PublicDragons';
import {configureStore} from '@reduxjs/toolkit';
import {fetchAuthenticated} from './actions/account';
import './index.css';



const store = configureStore({
    reducer: rootReducer
});

const AuthRoute =  ({})=>{
    if (!store.getState().account.loggedIn) {
        return <navigate to={ '/'}/>
    }
    const {element, path} = useParams();
    return <Route path={path} element={element}/>
}

store.dispatch(fetchAuthenticated())
    .then(() => {
        document.getElementById('root'));
        return(
            <Provider store={store}>
            <BrowserRouter navigate={navigate()}>
                <Routes>
                    <Route path='/' element={<Root/>}/>
                    <AuthRoute path='/account-dragons' elements={<AccountDragons/>}/>
                    <AuthRoute path='/public-dragons' elements={<PublicDragons/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>)

    });

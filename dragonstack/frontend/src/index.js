import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
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
// const RedirectToAccountDragons = ()=>{
//     return(
//         <Redirect to={{pathname: '/account-dragons'}}/>
//     );
// }

const AuthRoute = props =>{
    if ( !store.getState().account.loggedIn){
        return <Redirect to={{pathname: '/'}}/>
    }

    const {component, path} = props;
    return <Route path={path} component={component}/>
}

store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Root}/>
                        <AuthRoute path='/account-dragons' component={AccountDragons}/>
                        <AuthRoute path='/public-dragons' component={PublicDragons}/>
                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    });




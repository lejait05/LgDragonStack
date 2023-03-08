import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import AuthForm from './AuthForm';
import account from "../reducers/account";



function Root(){
    return(
        account.loggedIn ? <Home/> : <AuthForm/>
    )

}
// class Root extends Component{
//     render(){
//         return(
//             this.props.account.loggedIn ? <Home /> : <AuthForm />
//         )
//     }
// }

export default connect(
    ({account})=>({account}),
    null
)(Root);


import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import AuthForm from './AuthForm';

class Root extends Component{
    render(){
        return(
            this.props.userAccount.loggedIn ? <Home /> : <AuthForm />
        )
    }
}

export default connect(
    ({userAccount})=>({userAccount}),
    null)
(Root);


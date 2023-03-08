import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import {signup, login} from '../actions/account';
import fetchStates from '../reducers/fetchStates';
import account from "../reducers/account";


function AuthForm() {
    const [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [buttonClicked, setButtonClicked] = useState(false);

    function updateUsername(event) {
        setUsername(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }


// class AuthForm extends Component {
//     state = {username: '', password: '', buttonClicked: false};
//     updateUsername = event => {
//         this.setState({username: event.target.value});
//     }
//     updatePassword = event => {
//         this.setState({password: event.target.value});
//     }




    function signup(){
        setButtonClicked(true);
        // {username}, {password};
        props.signup({setUsername, setPassword});
    }


    // signup=>()=>{
    //     this.setState({buttonClicked: true});
    //     const {username , password}= this.state;
    //     this.props.signup({setUsername, setPassword});
    // }


    function login(){
        setButtonClicked(true);
        // setUsername(''), setPassword('')
        props.login(setUsername, setPassword);
    }


    // login = () => {
    //     this.setState({buttonClicked: true});
    //     const {username, password} = this.state;
    //     this.props.login({username, password});
    // }

    function getError() {
        if (
            setButtonClicked && account.status === fetchStates.error
        ) {
            return <div>{account.message}</div>
        }
    }

    // get Error() {
    //     if (
    //         this.setState.buttonClicked &&
    //         this.props.account.status === fetchStates.error
    //     ) {
    //         return <div>{this.props.account.message}</div>
    //     }
    // }

    // render() {
    return (
        <div>
            <h2>Dragon Stack</h2>
            <FormGroup>
                <FormControl
                    type='text'
                    value={username}
                    // value={this.state.username}
                    placeholder='username'
                    onChange={updateUsername}/>
                {/*onChange={this.updateUsername}/>*/}
            </FormGroup>
            <FormGroup>
                <FormControl
                    type='password'
                    value={password}
                    // value={this.state.password}
                    placeholder='password'
                    onChange={updatePassword}/>
                {/*onChange={this.updatePassword}/>*/}
            </FormGroup>
            <div>
                <Button onClick={login}>Log In</Button>
                {/*<Button onClick={this.login}>Log In</Button>*/}
                <span>or</span>
                <Button onClick={signup}>Sign Up</Button>
                {/*<Button onClick={this.signup}>Sign Up</Button>*/}
            </div>
            <br/>
            {Error}
            {/*{this.Error}*/}
        </div>
    );
    // }
}

export default connect(
    ({account}) => ({account}),
    {signup, login})
(AuthForm);

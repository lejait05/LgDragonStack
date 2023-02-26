import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserAccountInfo} from '../actions/userAccountInfo';

class userAccountInfo extends Component{
     componentDidMount() {
         this.props.fetchUserAccountInfo();
     }
     render(){
         return(
             <div>
                 <h3>Account Info</h3>
                 <div>Username: {this.props.userAccountInfo.username}</div>
                 <div>Balance: {this.props.userAccountInfo.balance}</div>
             </div>
         )
     }
}
export default connect(
    ({userAccountInfo})=>({userAccountInfo}),
    {fetchUserAccountInfo}
)(userAccountInfo);

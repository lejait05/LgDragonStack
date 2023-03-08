import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {fetchAccountDragons} from '../actions/accountDragons';
import AccountDragonRow from './AccountDragonRow';
import accountDragons from "../reducers/accountDragons";


function AccountDragons(){
  function  componentDidMount() {
       fetchAccountDragons();
    }


// class AccountDragons extends Component {
//     componentDidMount() {
//         this.props.fetchAccountDragons();
//     }

    // render() {
        return (
            <div>
                <h3>Account Dragons</h3>
                {
                    accountDragons.dragons.map(dragon => {
                    // this.props.accountDragons.dragons.map(dragon => {
                        return (
                            <div key={dragon.dragonId}>
                                <AccountDragonRow dragon={dragon}/>
                                <hr/>
                            </div>
                        )
                    })
                }
                <Link to='/'>Home</Link>
            </div>
        );

}

export default connect(
    ({accountDragons}) => ({accountDragons}),
    {fetchAccountDragons}
)(AccountDragons);

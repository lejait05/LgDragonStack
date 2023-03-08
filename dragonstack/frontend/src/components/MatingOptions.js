import React, {Component, useState} from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {BACKEND} from "../config";
// import useNavigate from 'react-router-dom';
import navigate from "../navigate";
import accountDragons from "./AccountDragons";


// const navigate = navigate();


function MatingOptions(){

// }

// class MatingOptions extends Component {
  const  mate= ({matronDragonId, patronDragonId})=>()=>{
        fetch(`${BACKEND.ADDRESS}/dragon/mate`, {
            method: 'POST',
            credentials:'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({matronDragonId, patronDragonId})
        }).then(response=>response.json())
            .then(json=>{
                alert(json.message)
                if (json.type !== 'error'){
                    navigate("/account-dragons");
                }
            })
            .catch(error=> alert(error.message));
    }

    // render(){
        return(
            <div>
                <h4> Pick one of your dragons to mate with:</h4>
                {
                    accountDragons.dragons.map(dragon=>{
                    // this.props.accountDragons.dragons.map(dragon=>{
                        const {dragonId, generationId, nickname} = dragon;
                        return(
                            <span key={dragonId}>
                                <Button onClick={
                                    mate({
                                            patronDragonId: this.patronDragonId,
                                    // this.mate({
                                    //     patronDragonId: this.props.patronDragonId,
                                        matronDragonId: dragon.dragonId
                                    })
                                }>
                                    G{generationId}.I{dragonId}.{nickname}
                                </Button>
                                {' '}
                            </span>
                        )
                    })
                }
            </div>
        )

}

export default connect(
    ({accountDragons})=> ({accountDragons}),
    null
)(MatingOptions);

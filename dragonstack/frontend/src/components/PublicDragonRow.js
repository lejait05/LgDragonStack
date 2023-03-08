import React, {Component, useState} from "react";
import DragonAvitar from "./DragonAvitar";
import {Button} from "react-bootstrap";
import MatingOptions from "./MatingOptions";
import {BACKEND} from "../config";
import history from "../navigate";
import navigate from "../navigate";
import dragon from "./Dragon";



function PublicDragonRow(){
    const [displayMatingOptions, setDisplayMatingOptions]= useState(false);
    function toggleDisplayMatingOptions(){
        setDisplayMatingOptions(!displayMatingOptions);
}


// class PublicDragonRow extends Component{
//     state = { displayMatingOptions: false};

    // toggleDisplayMatingOptions =()=>{
    //     this.setState({
    //         displayMatingOptions: !this.state.displayMatingOptions
    //     });
    // }

    function buy(){
        const {dragonId, saleValue}= dragon;


    // buy=()=>{
    //     const {dragonId, saleValue} = this.props.dragon;
        fetch(`${BACKEND.ADDRESS}/dragon/buy`,{
            method:'POST',
            credentials:'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({dragonId, saleValue})
        }).then(response =>response.json())
            .then(json=>{
                alert(json.message);

                if (json.type !== 'error') {
                    navigate('/account-dragons');
                }
            })
            .catch(error =>alert(error.message));
    }

    // render(){
        return(
            <div>
                <div>{dragon.nickname}</div>
                {/*<div>{this.props.dragon.nickname}</div>*/}
               <DragonAvitar dragon={dragon}/>
                {/*<DragonAvitar dragon={this.props.dragon}/>*/}
                <div>
                    <span>Sale Value: {dragon.saleValue}</span>{' | '}
                    <span>Sire Value: {dragon.sireValue}</span>
                    {/*<span>Sale Value: {this.props.dragon.saleValue}</span>{' | '}*/}
                    {/*<span>Sire Value: {this.props.dragon.sireValue}</span>*/}
                </div>
                <br/>
                <Button onClick={buy}>Buy</Button>{' '}
                <Button onClick={toggleDisplayMatingOptions}>Sire</Button>
                {/*<Button onClick={this.buy}>Buy</Button>{' '}*/}
                {/*<Button onClick={this.toggleDisplayMatingOptions}>Sire</Button>*/}
                <br/>
                {
                    displayMatingOptions ?
                        <MatingOptions patronDragonId={dragon.dragonId}/> :
                    // this.state.displayMatingOptions ?
                    //     <MatingOptions patronDragonId={this.props.dragon.dragonId}/> :
                        <div></div>
                }
            </div>
        )

}
export default PublicDragonRow;

import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import DragonAvitar from './DragonAvitar';
import {fetchDragon} from '../actions/dragon';
import dragon from "../reducers/dragon";



function  Dragon(){

// }
 // class Dragon extends Component{


    // render(){
        return(
            <div>
                <Button onClick={fetchDragon }>New Dragon</Button>
                <DragonAvitar dragon={dragon} />
                {/*<Button onClick={this.props.fetchDragon }>New Dragon</Button>*/}
                {/*<DragonAvitar dragon={this.props.dragon} />*/}
            </div>
        )

 }
 export default connect (
     ({dragon})=>({dragon}),
     {fetchDragon}
 )(Dragon);

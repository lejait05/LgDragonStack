import React, {Component} from 'react';
import { skinny, slender, sporty, stocky, striped, spotted, plain, patchy} from '../assets';

 const propertyMap = {
     backgroundColor:{
         black: '#263838',
         white: '#cfd8dc',
         green: '#00ff00',
         blue: '#0000FF'
     },
     build:{ slender, stocky, sporty, skinny},
     pattern:{ striped, spotted, plain, patchy},
     size:{ small: 100, medium: 140, large: 180, texan: 220 }
 };


class DragonAvitar extends Component {
    render(){
        const{generationId, dragonId, traits }= this.props.dragon;
        return(
            <div>
                <span>G{generationId}. </span>
                <span>I{dragonId}. </span>

                {traits.map(trait =>trait.traitValue).join(', ') }
            </div>
        )
    }
}


export default DragonAvitar;

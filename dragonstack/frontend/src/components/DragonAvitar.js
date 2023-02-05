import React, {Component} from 'react';


class DragonAvitar extends Component {
    render(){
        const{generationId, dragonId, traits }= this.state.dragon;
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

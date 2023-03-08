import React, {Component, useState} from 'react';
import {skinny, slender, sporty, stocky, striped, spotted, plain, patchy} from '../assets';
import dragon from "./Dragon";

const propertyMap = {
    backgroundColor: {
        black: '#263838',
        white: '#cfd8dc',
        green: '#00ff00',
        blue: '#0000FF'
    },
    build: {slender, stocky, sporty, skinny},
    pattern: {striped, spotted, plain, patchy},
    size: {small: 100, medium: 140, large: 180, texan: 220}
};


function DragonAvitar() {
     function DragonImage() {
        const dragonPropertyMap = {};
        dragon.traits.forEach(trait => {
            const {traitType, traitValue} = trait;
            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });
    // }

// class DragonAvitar extends Component {
//     get DragonImage(){
//         const dragonPropertyMap={};
//         this.props.dragon.traits.forEach(trait=>{
//             const{ traitType, traitValue}=trait;
//             dragonPropertyMap[traitType]= propertyMap[traitType][traitValue];
//         });
    const {backgroundColor, build, pattern, size} = dragonPropertyMap;

    const sizing = {width: size, height: size};
    return (
        <div className='dragon-avatar-image-wrapper'>
            <div className='dragon-avatar-image-background' style={{backgroundColor, ...sizing}}></div>
            <img src={pattern} className='dragon-avatar-image-pattern' style={{...sizing}}/>
            <img src={build} className='dragon-avatar-image' style={{...sizing}}/>
        </div>
    )
}

// render()
// {

    const {generationId, dragonId, traits} = dragon;
    // const {generationId, dragonId, traits} = this.props.dragon;
    if (!dragonId) return <div></div>;

    return (
        <div>
            <span>G{generationId}. </span>
            <span>I{dragonId}. </span>
            {traits.map(trait => trait.traitValue).join(', ')}
            {DragonImage}
        </div>
    )

}


export default DragonAvitar;

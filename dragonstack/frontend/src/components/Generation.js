import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generationActionCreator} from '../actions/generation';

const DEFAULT_GENERATION = {generationId: '', expiration: ''};
const MINIMUM_DELAY = 3000;

class Generation extends Component{
    state = {generation: DEFAULT_GENERATION };
    timer = null;
    componentDidMount() {
        this.fetchNextGeneration();
    }
componentWillUnmount(){
        clearTimeout(this.timer);
}
    fetchGeneration = ()=> {
        fetch('http://localhost:3000/generation')
            .then(response =>response.json())
            .then(json=>{
                console.log('json', json)
                this.setState({generation: json.generation});
                this.props.dispatch(generationActionCreator(json.generation));
            })

            .catch(error=>console.error('error', error));
    };
fetchNextGeneration =() => {
this.fetchGeneration();

let delay = new Date(this.state.generation.expiration).getTime() -
new Date().getTime();
if (delay < MINIMUM_DELAY){
    delay = MINIMUM_DELAY;
}
this.timer = setTimeout(()=> this.fetchNextGeneration(), delay);
}
render(){
    console.log('this.props', this.props);

        const {generation} = this.props;

        return(
            <div>
                <h3>Generation {generation.generationId}. Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    const generation = state.generation;
    return{generation};
};
const componentConnector = connect(mapStateToProps);
export default componentConnector(Generation);

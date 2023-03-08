import React from 'react';
import {connect} from 'react-redux';
import {fetchGeneration} from '../actions/generation';
import fetchStates from '../reducers/fetchStates';
import generation from "../reducers/generation";

const DEFAULT_GENERATION = {generationId: '', expiration: ''};
const MINIMUM_DELAY = 3000;


function Generation() {
    const timer = null;

    function componentDidMount() {
        fetchNextGeneration();
    }

// class Generation extends Component{
//     timer = null;
//     componentDidMount() {
//         this.fetchNextGeneration();
//     }
function componentWillUnmount() {
    clearTimeout(this.timer);
}

function fetchNextGeneration() {
    fetchGeneration();
// fetchNextGeneration =() => {
// this.props.fetchGeneration();

    let delay = new Date(generation.expiration).getTime() -
        // let delay = new Date(this.props.generation.expiration).getTime() -
        new Date().getTime();
    if (delay < MINIMUM_DELAY) {
        delay = MINIMUM_DELAY;
    }
    let timer = setTimeout(() => fetchNextGeneration(), delay);
// this.timer = setTimeout(()=> this.fetchNextGeneration(), delay);
}

// render() {
//     console.log('this.props', this.props);
const {generation} = props;
// const {generation} = this.props;

    if (generation.status === fetchStates.error) {
        return <div>{generation.message}</div>;
    }

    return (
        <div>
            <h3>Generation {generation.generationId}. Expires on:</h3>
            <h4>{new Date(generation.expiration).toString()}</h4>
        </div>
    )


// const mapStateToProps = state => {
//     const generation = state.generation;
//     return {generation};
// };
}
const componentConnector = connect(
    generation,
    {fetchGeneration}
);
export default componentConnector(Generation);

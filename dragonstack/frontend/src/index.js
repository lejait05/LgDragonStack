import React from 'react';
import { createStore} from 'redux';
import {render} from 'react-dom';
// import {createRoot} from 'react-dom/client';
// import {Root} from "./Root";
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import {generationReducer} from './reducers';
import {generationActionCreator} from './actions/generation';


import './index.css';



const store = createStore(generationReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>console.log('store state update', store.getState()));

fetch('http://localhost:3000/generation')
    .then(response =>response.json())
    .then(json=>{
        store.dispatch(generationActionCreator(json.generation))
    });

render(
    <div>
    <h2>Dragon Stack </h2>
<Generation/>
        <Dragon/>
    </div>,
    document.getElementById('root')
);

// const container = document.getElementById('root');
//
// const root = createRoot(container)
// root.render(<Root />);
// export function Root(){
//     return <h2>Dragon Stack from React</h2>;
// }

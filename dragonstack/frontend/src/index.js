import React from 'react';
import {render} from 'react-dom';
// import {createRoot} from 'react-dom/client';
// import {Root} from "./Root";
import Generation from './components/Generation';
import Dragon from './components/Dragon';
render(
    <div>
    <h2>Dragon Stack from React</h2>
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

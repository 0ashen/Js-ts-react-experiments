import React, {useState} from 'react';
import ReactDOM from 'react-dom';

debugger;

const App = function () {
    const [state, setState] = useState(1);

    return <div onClick={()=> {
        setState(state + 1)
    }}>{state}</div>;
};
console.log(App);
console.log(<App/>);
console.log(<div></div>);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

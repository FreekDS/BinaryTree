import React from 'react';
import '../style/App.css';
import {options} from '../config'
import {TreeGraph} from "./TreeGraph";


function App() {

    return (
        <div>
            <TreeGraph options={options}/>
        </div>
    );
}

export default App;

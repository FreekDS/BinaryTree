import React, {useState} from "react";
import Graph from "react-graph-vis";
import {InputForm} from "./InputForm";


let TreeGraph = (props) => {

    let [representation, setRepresentation] = useState({
        edges: [],
        nodes: []
    });
    let [network, setNetwork] = useState(null);

    const update = (newVal) => {
        setRepresentation(newVal);
        if (network) {
            network.setData(newVal)
        }
    };

    return (
        <div>
            <InputForm update={update}/>
            <Graph
                options={props.options}
                updateTrigger={representation}
                graph={{edges: [], nodes: []}}
                getNetwork={network => {
                    setNetwork(network)
                }}/>
        </div>
    );
};



export {TreeGraph}

import React, {useState} from "react";
import Graph from "react-graph-vis";
import {InputForm} from "./InputForm";
import {BinaryTree} from "../tree-lib/BinaryTree";


let TreeGraph = (props) => {

    const defaultTree = {
        edges: [],
        nodes: []
    };

    let [tree, setTree] = useState(new BinaryTree(null));

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

    const clear = () => {
        update(defaultTree);
        setTree(new BinaryTree(null));
    };

    return (
        <div>
            <InputForm update={update} tree={tree}/>
            <button onClick={()=> {clear()}}>Clear tree</button>
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

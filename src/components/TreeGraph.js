import React, {useEffect, useState} from "react";
import Graph from "react-graph-vis";
import {InputForm} from "./InputForm";
import {BinaryTree} from "../tree-lib/BinaryTree";
import Col from "react-bootstrap/Col";
import {options} from "../config";

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

    useEffect(() => {
        function handleResize() {
            if(network) {
                let newOptions = options;
                newOptions.height = `${window.innerHeight}px`;
                network.setOptions(newOptions);
                network.fit();
            }
        }

        window.addEventListener('resize', handleResize);
    });

    const update = (newVal) => {
        setRepresentation(newVal);
        if (network) {
            network.setData(newVal);
        }
    };

    const clear = () => {
        update(defaultTree);
        setTree(new BinaryTree(null));
    };

    return (
        <React.Fragment>
            <Col>
                <InputForm update={update} tree={tree}/>

                <button className={"btn btn-primary"} onClick={() => {
                    clear()
                }}>Clear tree
                </button>
            </Col>
            <Col>
                <div style={{height: '100vh'}}>
                    <Graph
                        options={props.options}
                        updateTrigger={representation}
                        graph={{edges: [], nodes: []}}
                        getNetwork={network => {
                            setNetwork(network)
                        }}/>
                </div>
            </Col>
        </React.Fragment>
    );
};


export {TreeGraph}

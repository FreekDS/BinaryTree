import React, {useCallback, useEffect, useState} from "react";
import Graph from "react-graph-vis";
import {InputForm} from "./InputForm";
import {BinaryTree} from "../tree-lib/BinaryTree";
import Col from "react-bootstrap/Col";
import {options} from "../config";
import Row from "react-bootstrap/Row";
import {IconTrash} from "./Icons";

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
    let [divElement, setDiv] = useState(null);

    let handleResize = useCallback(() => {
        if (network) {
            let newOptions = options;
            newOptions.height = `${divElement.clientHeight}px`;
            network.setOptions(newOptions);
            network.fit();
        }
    }, [network, divElement]);


    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    useEffect(() => {
        handleResize();
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
            <Col md={4} className={"mb-2"}>
                <InputForm update={update} tree={tree}/>
                <Row className={"mt-3"}>
                    <Col>
                        <button className={"btn btn-danger"} onClick={() => {
                            clear()
                        }}>
                            <IconTrash/>
                            Clear tree
                        </button>
                    </Col>
                </Row>
            </Col>
            <Col>
                <div style={{height: '80vh'}}
                     ref={(divElement) => {
                         setDiv(divElement)
                     }}
                     className={"border border-dark"}>
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

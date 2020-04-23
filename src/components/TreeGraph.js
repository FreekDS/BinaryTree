import React, {useEffect, useState} from "react";
import Graph from "react-graph-vis";
import {BinaryTree} from '../tree-lib/BinaryTree'
import {InputForm} from "./InputForm";


class TreeGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                tree: new BinaryTree(null),
                repr: {
                    nodes: [],
                    edges: []
                },
                network: null
            };

        this.update = this.update.bind(this);

    }

    componentDidMount() {
        this.setState({
            repr: this.state.tree.toGraph()
        });
    }

    update(newVal) {
        this.setState({
            repr: newVal
        });
        if(this.state.network) {
            this.state.network.setData(newVal);
        }
    }

    render() {
        let {tree, repr} = this.state;
        const initial = {
            nodes: [], edges: []
        };
        return (
        <div>
            <InputForm tree={tree} update={this.update}/>
            <Graph options={this.props.options} rerender={repr} graph={initial} getNetwork={network => {
                this.setState({network})
            }}/>
        </div>
    );
    }
}


// let TreeGraph = (props) => {
//
//     let [tree, setTree] = useState(new BinaryTree(null));
//     let [treeRepr, setTreeRepr] = useState({
//         nodes: [],
//         edges: []
//     });
//
//     useEffect(() => {
//         console.log("called use effect");
//     }, [treeRepr]);
//
//     let update = (new_val) => {
//         console.log("update");
//         setTreeRepr(new_val);
//     };
//
//     return (
//         <div>
//             <InputForm tree={tree} setRepr={update} old={treeRepr}/>
//             <Graph options={props.options} graph={treeRepr} />
//         </div>
//     );
//
// };

export {TreeGraph}

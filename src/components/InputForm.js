import React, {useState} from "react";
import {BinaryTree} from "../tree-lib/BinaryTree";


const InputForm = (props) => {

    let [tree] = useState(new BinaryTree(null));

    const handleInput = (event) => {
        event.preventDefault();
        tree.insert(event.target.test.value.toLowerCase());
        event.target.test.value = '';
        props.update(tree.toGraph());
    };

    return (
        <div>
            <form onSubmit={e => handleInput(e)}>
                <label>
                    Enter name or number
                    <input id="test" type={"text"}/>
                </label>
            </form>
        </div>
    );
};

export {InputForm}

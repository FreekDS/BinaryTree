import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormGroup";


const InputForm = (props) => {

    let {tree} = props;
    let [enabled, setEnabled] = useState(false);

    const handleInput = (event) => {
        event.preventDefault();
        tree.insert(event.target.input.value.toLowerCase());
        event.target.input.value = '';
        props.update(tree.toGraph());
        setEnabled(false);
    };

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target);
        let value = event.target.value.toLowerCase();
        setEnabled(value.length !== 0);
    };

    return (
        <div>
            <Form onSubmit={e => handleInput(e)}>
                <FormGroup>
                    <FormLabel htmlFor={"input"}>Enter name or number</FormLabel>
                    <input
                        className={"form-control"}
                        type={"text"} id="input"
                        placeholder={"ex. 10 or Bart"}
                        onChange={handleChange}
                    />
                    <input type={"submit"} className={"btn btn-primary"} value={"add"} disabled={!enabled} />
                </FormGroup>
            </Form>
        </div>
    );
};

export {InputForm}

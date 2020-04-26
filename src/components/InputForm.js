import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import FormLabel from "react-bootstrap/FormLabel";
import '../style/treeForm.css'
import Col from "react-bootstrap/Col";


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
        <div className={"pt-5"}>
            <Form onSubmit={e => handleInput(e)}>
                <FormLabel htmlFor={"input"}>Enter name or number</FormLabel>
                <Form.Row>
                    <Col>
                        <input
                            className={"form-control"}
                            type={"text"} id="input"
                            placeholder={"ex. 10 or Bart"}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <input type={"submit"} className={"btn btn-primary add-btn"} value={"add"} disabled={!enabled}/>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export {InputForm}

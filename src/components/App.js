import React from 'react';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {options} from '../config'
import {TreeGraph} from "./TreeGraph";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {

    return (
        <Container fluid className={"h-100"}>
            <Row
                className={"h-100"}>
                <TreeGraph options={options}/>
            </Row>
        </Container>
    );
}

export default App;

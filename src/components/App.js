import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {options} from '../config'
import {TreeGraph} from "./TreeGraph";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

function App() {

    return (

        <React.Fragment>
            <Navbar bg={"dark"} variant={"dark"}>
                <NavbarBrand>
                   Binary Tree Visualizer
                </NavbarBrand>
            </Navbar>

            <Container fluid className={"h-100"}>
                <Row className={"mt-2 mb-1"}>
                    <TreeGraph options={options}/>
                </Row>
            </Container>

        </React.Fragment>
    );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {options} from '../config'
import {TreeGraph} from "./TreeGraph";

import logo from '../style/assets/logo-UA.jpg'

import GitHubButton from 'react-github-btn'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

function App() {

    return (

        <React.Fragment>
            <Navbar bg={"dark"} variant={"dark"}>
                <NavbarBrand>
                    Binary Tree Visualizer
                </NavbarBrand>
                <div className={"ml-auto mt-2"}>
                    <GitHubButton href="https://github.com/FreekDS/BinaryTree/"
                                  aria-label="Watch FreekDS/BinaryTree on GitHub">Source code</GitHubButton>
                </div>
            </Navbar>

            <Container fluid className={"h-100"}>
                <Row className={"mt-2 mb-1"}>
                    <TreeGraph options={options}/>
                </Row>
                <Row className={"mt-1 d-flex justify-content-end mr-1"}>
                    <img src={logo} alt={"UA logo"} width={"4%"}/>
                </Row>
            </Container>


        </React.Fragment>
    );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from '../App';

import Alert from 'react-bootstrap/Alert'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const Root: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Container fluid>
        <Alert variant="warning" className="text-center">This site is under construction now.</Alert>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">Donghyeok Tak</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="./">Home</Nav.Link>
              <Nav.Link href="./apps">Apps</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/tdh8316" target="_blank">Github</Nav.Link>
              <Nav.Link href="mailto:tdh8316@naver.com">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <App></App>
      </Container>
    </Switch>
  </BrowserRouter>
);

export default Root;

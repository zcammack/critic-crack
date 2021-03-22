import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class MenuComponent extends Component {

    render() {
        return ( 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Critic-Crack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/movies">
                                View All Movies
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/movies-new">
                                Add New Movie
                            </NavDropdown.Item>  
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MenuComponent
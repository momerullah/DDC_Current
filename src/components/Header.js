import 'bootstrap/dist/css/bootstrap.min.css';  
import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import './Header.css';

function Header() {  
    return (  
        <div>
            <div className="header-section">
                <Navbar id="nav" bg="dark" variant="dark" expand="md" className="fixed-top custom-navbar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img id="logo" src="/logo.png" alt="Logo" className="logo-img" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="custom-nav-link" Item href="#menu">Menu</Nav.Link>
                                <Nav.Link className="custom-nav-link" href="#ordering">Ordering</Nav.Link>
                                <Nav.Link className="custom-nav-link" href="#contact">Contact</Nav.Link>
                                <Nav.Link className="custom-nav-link" href="#testimonials">Testimonials</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="center-logo-quote">
                <img src="/logo.png" alt="Logo" className="center-logo-img" />
                <p className="quote">"We offer a variety of authentic Hyderabadi dishes, prepared fresh and ready for pickup every weekend. Experience the rich flavors and traditional recipes of Hyderabad, right here!"</p>
            </div>
        </div>
    );  
}

export default Header;

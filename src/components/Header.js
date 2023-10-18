import 'bootstrap/dist/css/bootstrap.min.css';  
import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-scroll';  // Added this line
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
                                <Link 
                                    activeClass="active"
                                    to="menu"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="custom-nav-link nav-link"
                                >
                                    Menu
                                </Link>
                                <Link 
                                    activeClass="active"
                                    to="ordering"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="custom-nav-link nav-link"
                                >
                                    Ordering
                                </Link>
                                <Link 
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="custom-nav-link nav-link"
                                >
                                    Contact
                                </Link>
                                <Link 
                                    activeClass="active"
                                    to="testimonials"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="custom-nav-link nav-link"
                                >
                                    Testimonials
                                </Link>
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

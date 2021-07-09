import React from 'react'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const MainNav = () => {
    return (
        <header class="header" id="header">
            <Container className='mainnav'>
                <Navbar className='navbar'>
                    <Navbar.Brand href="../" className='navbar-brand'>Juanc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className= 'd-flex justify-content-end' >
                        <Nav className="navbar mr-auto">
                        <Nav.Link href="../">Home</Nav.Link>
                        <Nav.Link href="../about">About me</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="../lekcje-hiszpanskiego">Lekcje hiszpańskiego</NavDropdown.Item>
                            <NavDropdown.Item href="../przygotowanie-na-egzamin">Przygotowanie na egzamin</NavDropdown.Item>
                            <NavDropdown.Item href="../rozmowa-z-nativem">Rozmowa</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Otros servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="../web-design">Web Design</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className= 'nav-item' href="../contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default MainNav


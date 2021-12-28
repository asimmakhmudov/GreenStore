import React, { useState } from 'react'
import Logo from '../assets/GreenTekno.png'
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai"
import { Navbar, Container, Button, Nav, Offcanvas, Form, FormControl } from 'react-bootstrap';
import "../index.css"

const NavBar = () => {
    const [search, setSearch] = useState([]);
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => setSearch(json))
    return (
        <div className='NavbaR'>
            <Navbar className='navchild' expand="lg" variant="light" bg="light">
                <Navbar.Brand href="/"><img className='navLogo' src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className='Navtext'>
                        <Nav.Link href="/">Ana səhifə</Nav.Link>
                        <Nav.Link href="/products">Məhsullar</Nav.Link>
                        <Nav.Link href="/sales">Endirimlər</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end navButton">
                        <button variant="text">
                            <AiOutlineHeart />
                        </button>
                        <button variant="text">
                            <MdAddShoppingCart />
                        </button>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>


            <Navbar className='searchNav' variant='light' expand={false}>
                <Container fluid>
                    <span className='categoryBtn'><Navbar.Toggle aria-controls="offcanvasNavbar" style={{ margin: "10px" }} />Kateqoriya</span>

                    {/* {search.filter((val) => {
                        if(search == '') {
                            return val
                        }
                        else if(val.category.toLowerCase().include(search.toLowerCase())){
                            return val
                        }
                    }).map((val, key) => ( */}
                        <Form className="d-flex justify-content-center">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(event) => {setSearch(event.target.value)}}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    {/* ))} */}

                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;

import React, { useState } from "react";
import {  Container, Dropdown, Modal, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./logowhite.png"
import TG from "../images/telegram.svg"
import TEL from "../images/phone.svg"
import CallbackForm from "./CallbackForm";

function Header () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);       
    

    return(
        <Router>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav.Link href="/">
                    <Navbar.Brand>
                        <img 
                            src={Logo}
                            height="65"
                            className="d-inline-block alight-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    </Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">Контакты</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="tel:+79043185629" ><img src={TEL} height="20" alt="Phone"/>&nbsp;&nbsp;89043185629</Dropdown.Item>
                            <Dropdown.Item href="https://t.me/Valentin13579"><img src={TG} height="20" alt="Telegram"/>&nbsp;&nbsp;Telegram</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Container/>
                        <Nav className="me-auto">
                            <Nav.Link href="#services">Услуги</Nav.Link>
                            <Nav.Link onClick={handleShow}>Доставка</Nav.Link>
                            <Nav.Link onClick={handleShow}>Оплата</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Форма обратной связи</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CallbackForm/>
                        </Modal.Body>
                    </Modal>
                </Container>
            </Navbar>
        </Router>
    );
};

export default Header;
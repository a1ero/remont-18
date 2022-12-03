import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Container, Modal, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";

import CallbackForm from "./CallbackForm";

function Footer () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <Router>
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5' style={{paddingTop: '50px'}}>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />Ремонт 18</h6>
                            <p>
                                Сайт не является публичной офертой и носит информационный характер.
                            </p>
                        </MDBCol>
                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <p>
                                <Nav.Link href='#services' className='text-reset'>Услуги</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link onClick={handleShow} className='text-reset'>Доставка</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link onClick={handleShow} className='text-reset'>Оплата</Nav.Link>
                            </p>
                        </MDBCol>
                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Продукты</h6>
                            <p>
                                <Nav.Link href='#product' className='text-reset'>Ламинат</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link href='#product' className='text-reset'>Линолеум</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link href='#product' className='text-reset'>Кварцвинил</Nav.Link>
                            </p>
                        </MDBCol>
                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Россия, Удмуртская республика, г.Ижевск
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                email@email.ru
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' />
                                +79999999999
                            </p>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
        </section>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2022 Copyright: 
            <a className='text-reset fw-bold' href='https://remont-18.ru/' style={{textDecoration: 'none'}}>
            Ремонт 18
            </a>
        </div>
        </MDBFooter>
        <Container>
        <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Форма обратной связи</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CallbackForm/>
                        </Modal.Body>
                    </Modal>
        </Container>
    </Router>
    );
};

export default Footer;

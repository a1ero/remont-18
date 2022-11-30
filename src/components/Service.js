import React, { useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap';

import styling from '../images/service/1.png'
import coupler from '../images/service/2.png'
import dismantling from '../images/service/3.png'
import repair from '../images/service/4.png'
import '../styles/@media.css'

import CallbackForm from "./CallbackForm";

function Service (){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container>
            <Container className='text-center text-lg-start' id='services'>
                    <h1 style={{textAlign: 'center', marginTop: '100px', marginBottom: '50px'}}>Наши услуги</h1>
            </Container>
            <Container style={{marginLeft: '3%'}}>
                <Container className='row' id='styling' style={{borderTop: '1px solid #adadad', paddingTop: '20px', marginBottom: '50px'}}>
                    <Container className='col-md-7'>
                        <h1 className='featurette-heading'>Укладка пола</h1>
                        <p className='lead'>Делаем качественную укладку ламината, линолеума, кварцвинила, по современным технологиям.</p>
                        <Button variant='dark' onClick={handleShow}>Подробнее</Button>
                    </Container>
                    <Container className='col-md-5'>
                    <br/>
                    <img 
                        className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                        height={500}
                        width={500}
                        src={styling}
                        alt="Укладка"
                        style={{borderRadius: '7px'}}
                        />
                    </Container>
                </Container>
                <Container className='row' id='coupler' style={{borderTop: '1px solid #adadad', paddingTop: '20px', marginBottom: '50px' }}>
                    <Container className='col-md-7 order-md-2'>
                        <h1 className='featurette-heading'>Сухая стяжка пола</h1>
                        <p className='lead'>Делаем надёжный ровный пол по технологии «Сухая стяжка».</p>
                        <Button variant='dark' onClick={handleShow}>Подробнее</Button>
                    </Container>
                    <Container className='col-md-5 order-md-1'>
                    <br/>
                    <img
                        className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                        height={500}
                        width={500}
                        src={coupler}
                        alt="Укладка"
                        style={{borderRadius: '7px'}}
                        />
                    </Container>
                </Container>
                <Container className='row' id='dismantling' style={{borderTop: '1px solid #adadad', paddingTop: '20px', marginBottom: '50px' }}>
                    <Container className='col-md-7'>
                        <h1 className='featurette-heading'>Демонтаж пола</h1>
                        <p className='lead'>Разбираем любые напольные покрытия.</p>
                        <Button variant='dark' onClick={handleShow}>Подробнее</Button>
                    </Container>
                    <Container className='col-md-5'>
                    <br/>
                    <img
                        className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                        height={500}
                        width={500}
                        src={dismantling}
                        alt="Укладка"
                        style={{borderRadius: '7px'}}
                        />
                    </Container>
                </Container>
                <Container className='row' id='repair' style={{borderTop: '1px solid #adadad', borderBottom: '1px solid #adadad', paddingTop: '20px', paddingBottom: '50px', marginBottom: '20px' }}>
                    <Container className='col-md-7 order-md-2'>
                        <h1 className='featurette-heading'>Ремонт под ключ</h1>
                        <p className='lead'>Комплекс работ по выравниванию стен, полов. </p>
                        <Button variant='dark' onClick={handleShow}>Подробнее</Button>
                    </Container>
                    <Container className='col-md-5 order-md-1'>
                    <br/>
                    <img
                        className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                        height={500}
                        width={500}
                        src={repair}
                        alt="Укладка"
                        style={{borderRadius: '7px'}}
                        />
                    </Container>
                </Container>
            </Container>
            <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Форма обратной связи</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CallbackForm/>
                        </Modal.Body>
                    </Modal>
        </Container>
    )
};

export default Service;

import React, { useState } from 'react'
import { Button, Container, Figure, Modal } from 'react-bootstrap'

import kvarc from '../images/content__figures/kvarc.png'
import linolium from '../images/content__figures/linolium.png'
import laminat from '../images/content__figures/laminat.png'
import { ChevronDoubleRight } from 'react-bootstrap-icons'

import CallbackForm from "./CallbackForm";

function Product() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    return(
        <Container>
            <Container className='row' id='product' style={{textAlign: 'center', marginTop: '30px', marginLeft: '0.009%', marginBottom: '50px'}}>
                <h1 style={{textAlign: 'center'}}>Покрытия</h1>
                <Figure className='col-lg-4' style={{textAlign: 'center', marginTop: '70px'}}>
                    <Figure.Image
                        width={200}
                        height={200}
                        alt="Ламинат"
                        src={laminat}
                    />
                    <Figure.Caption style={{color:'black'}}>
                        <h3>Ламинат</h3>
                        <p>Многослойное напольное покрытие на основе плиты HDF c нанесённой на поверхность защитной плёнкой.</p>
                        <Button variant='secondary' onClick={handleShow}>Подробнее<ChevronDoubleRight/></Button>
                    </Figure.Caption>
                </Figure>
                <Figure className='col-lg-4' style={{textAlign: 'center', marginTop: '70px'}}>
                    <Figure.Image
                        width={200}
                        height={200}
                        alt="Линолиум"
                        src={linolium}
                    />
                    <Figure.Caption style={{color:'black'}}>
                        <h3>Линолеум</h3>
                        <p>Напольное покрытие, преимущественно из полимерных материалов.</p>
                        <Button variant='secondary' onClick={handleShow}>Подробнее<ChevronDoubleRight/></Button>
                    </Figure.Caption>
                </Figure>
                <Figure className='col-lg-4' style={{textAlign: 'center', marginTop: '70px'}}>
                    <Figure.Image
                        width={200}
                        height={200}
                        alt="Кварцвинил"
                        src={kvarc}
                    />
                    <Figure.Caption style={{color:'black'}}>
                        <h3>Кварцвинил</h3>
                        <p>Гибкий виниловый пол толщиной 2–5 мм с многослойной структурой.</p>
                        <Button variant='secondary' onClick={handleShow}>Подробнее<ChevronDoubleRight/></Button>
                    </Figure.Caption>
                </Figure>
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
    );
};

export default Product;

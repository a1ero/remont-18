import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Send } from "react-bootstrap-icons";

const CallbackForm = () => {
 
    return(
        <Container>
            <h5 className="text-center">Для уточнения информации оставьте ваш номер телефона и мы вам перезвоним</h5>
            <br/>
            <Form method="POST" action="">
                <Form.Group controlId="formBasicName">
                    <Form.Control required type="text" name="name" placeholder="Ваше имя"/>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPhone">
                    <Form.Control required type="tel" name="phone" placeholder="+79999999999"/>
                    <Form.Text>Мы никогда не будем делиться вашим номером с кем-либо еще.</Form.Text>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check required type="checkbox" label="Согласен на обработку персональных данных"/>
                </Form.Group>
                <br/>
                <Button variant="dark" type="submit"><Send/> Отправить</Button>
            </Form>
        </Container>
    );
};

export default CallbackForm;
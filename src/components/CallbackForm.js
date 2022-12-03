import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Send } from "react-bootstrap-icons";
import emailjs from '@emailjs/browser'

const CallbackForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Отправить');

    const sendEmail = (e)=> {
        e.preventDefault();
        setButtonText('Отправка...')
        emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
        .then((result) => {
            console.log(result.text);
            setButtonText('Успешно')
        }, 
        (error) => { 
            console.log(error.text);
            setButtonText('Ошибка')
      });
    };

    return(
        <Container>
            <h5 className="text-center">Для уточнения информации оставьте ваш номер телефона и мы вам перезвоним</h5>
            <br/>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formBasicName">
                    <Form.Control 
                        required 
                        type="text" 
                        name="form_name"  
                        placeholder="Ваше имя"
                    />
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPhone">
                    <Form.Control 
                        required 
                        type="tel" 
                        name="form_phone" 
                        placeholder="+79999999999"
                    />
                    <Form.Text>Мы никогда не будем делиться вашим номером с кем-либо еще.</Form.Text>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check required type="checkbox" label="Согласен на обработку персональных данных"/>
                </Form.Group>
                <br/>
                <Button variant="dark" type="submit"><Send/> {buttonText}</Button>
            </Form>
        </Container>
    );
};

export default CallbackForm;

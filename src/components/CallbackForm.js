import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import MaskedInput from "react-maskedinput";
import { Send } from "react-bootstrap-icons";
import emailjs from '@emailjs/browser'
import { FormControl } from "react-bootstrap";

const CallbackForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Отправить');

    const sendEmail = (e)=> {
        e.preventDefault();
        setButtonText('Отправка...')
        emailjs.sendForm('service_6r965ou', 'template_r2v1gbg', form.current, '2hkrfA8FylK9k2Fnc')
        .then((result) => {
            console.log(result.text);
            setButtonText('Успех!')
            setTimeout(function(){
                window.location.reload(1);
             }, 3000);
        }, 
        (error) => { 
            console.log(error.text);
            setButtonText('Ошибка')
            alert('Упс, что-то пошло не так, попробуйте снова.')
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
                    <FormControl as={MaskedInput}  
                        required 
                        type='text' 
                        name="form_phone" 
                        mask="+7(111)111-11-11"
                        placeholder="+7(999)999-99-99"/>
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

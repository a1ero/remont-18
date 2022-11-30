import React from 'react';
import '../styles/@media.css'
import  Carousel  from 'react-bootstrap/Carousel';
import firstSlide from '../images/carousel/1.png'
import secondSlide from '../images/carousel/2.png'
import thirdSlide from '../images/carousel/3.png'
import fourthSlide from '../images/carousel/4.png'
import { HashLink as Link } from 'react-router-hash-link';

function CarouselSlide () {

  return(
    <Carousel>
      <Carousel.Item id='carousel__img'>
        <Link to='#styling'>
          <img
            id='img'
            className="d-block"
            src={firstSlide}
            alt="First slide"
            height='700px'
            width='100%'
          />
          <Carousel.Caption style={{background: 'black', borderRadius: '20px', opacity: '.7'}}>
            <h1>Укладка пола</h1>
            <p>Укладка ламината, линолеума, кварцвинила.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item id='carousel__img'>
        <Link to='#coupler'>
          <img
            id='img'
            className="d-block"
            src={secondSlide}
            alt="Second slide"
            height='700px'
            width='100%'
          />
          <Carousel.Caption style={{background: 'black', borderRadius: '20px', opacity: '.7'}}>
            <h1>Сухая стяжка</h1>
            <p>Выравнивание полов сухой стяжкой под укладку пола.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item id='carousel__img'>
        <Link to='#repair'>
          <img
            id='img'
            className="d-block"
            src={thirdSlide}
            alt="Third slide"
            height='700px'
            width='100%'
          />
          <Carousel.Caption style={{background: 'black', borderRadius: '20px', opacity: '.7'}}>
            <h1>Ремонт под ключ</h1>
            <p>Ремонт и отделка квартир.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item id='carousel__img'>
        <Link to='#dismantling'>
          <img
            id='img'
            className="d-block"
            src={fourthSlide}
            alt="Fourth slide"
            height='700px'
            width='100%'
          />
          <Carousel.Caption style={{background: 'black', borderRadius: '20px', opacity: '.7'}}>
            <h1>Демонтаж полов</h1>
            <p>Снятие любого напольного покрытия.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
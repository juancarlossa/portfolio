import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ButtonOne } from '../templates/Boton';

const Product = () => {
    const Product1 = () => {
        return (
            <div className='contenedor'>
                <Row>
                    <Col>
                        <h3>Hiszpański od zera</h3>
                        <p>Jestem Hiszpanem mieszkającym w Polsce. Aktualnie pomagam Polakom w nauce </p>
                        <p>Jestem Hiszpanem mieszkającym w Polsce. Aktualnie pomagam Polakom w nauce hiszpańskiego</p>
                        <ButtonOne />
                    </Col>
                    <Col>
                        <img></img>
                    </Col>
                </Row>
            </div>
        )
    }
    const Product2 = () => {
        return (
            <div className='contenedor'>
                <Row>
                    <Col>
                        <img></img>
                    </Col>
                    <Col>
                        <h3>Przygotowanie na egzamin</h3>
                        <p>Jestem Hiszpanem mieszkającym w Polsce. Aktualnie pomagam Polakom w nauce </p>
                        <p>Jestem Hiszpanem mieszkającym w Polsce. Aktualnie pomagam Polakom w nauce hiszpańskiego</p>
                        <ButtonOne />
                    </Col>
                </Row>
            </div>
        )
    }
    const Product3 = () => {
        return (
            <div className='contenedor'>
                <Row>
                    <Col>
                        <h3>Rozmowa</h3>
                        <p>Jestem Hiszpanem mieszkającym w Polsce. Aktualnie pomagam Polakom w nauce </p>
                        <p>Jestem Hiszpanem mieszkającym w Polsce. Aktualnie pomagam Polakom w nauce hiszpańskiego</p>
                        <ButtonOne />
                    </Col>
                    <Col>
                        <img></img>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div>
            <Product1 />
            <Product2 />
            <Product3 />
        </div>
    )
}

export default Product



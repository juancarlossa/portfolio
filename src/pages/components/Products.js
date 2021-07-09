import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Titulo from '../templates/Titulo';
import Product from '../templates/Product';


const Products = () => {
    return (
        <section className='esp-bottom'>
            <Container>
                <Titulo />
                <Product />
            </Container>
        </section>
    )
}

export default Products

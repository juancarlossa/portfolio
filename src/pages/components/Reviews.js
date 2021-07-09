import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cards from '../templates/Cards';

const Reviews = () => {
    return (
        <section className='contenedor'>
            <h2>Reviews</h2>
            <Container>
                <Row>
                    <Col>
                        <Cards />
                    </Col>
                    <Col>
                        <Cards />
                    </Col>
                    <Col>
                        <Cards />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Reviews

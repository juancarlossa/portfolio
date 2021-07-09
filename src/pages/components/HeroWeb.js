import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap';

const HeroWeb = () => {
    return (
        
        <section className='herosub bannersub'>
            <Container>
                <Jumbotron>
                    <div class="container con-banner">
                        <div class="row">
                            <div class="col-sm-12" id="banner-texto">
                                <h2 class="miportfolio">Jestem Juan</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </Container>
        </section>
     
    )
}

export default HeroWeb

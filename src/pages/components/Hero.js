import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import { ButtonZero } from '../templates/Boton';
import '../../sass/_App.sass'

const Hero = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <Jumbotron className='banner-texto'>
                    <h1>Hello, world! my rastanem przez tovoi raskudriavi i snoi</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <ButtonZero />
                </Jumbotron>
            </div>  
        </div>
    )
}


export default Hero

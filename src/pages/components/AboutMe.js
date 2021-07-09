import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ButtonOne } from '../templates/Boton';

const AboutMe = () => {
    return (
        <div>
            <section class="banner2">
                <div class="container con-banner">
                    <div class="row">
                        <div class="col-sm-12" id="banner-texto">
                            <h2 class="miportfolio">Jestem Juan</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sobremi columnas gris">
                <div class="container">
                    <div class="row">
                        <div class="col-lg container sobremi-img">
                            <div class="container img">
                                <img src="C:\Users\juank\portfolio\src\images\fondoazul.jpg" alt="" class="fotoperfil fotoperfil-yo" />
                            </div>
                        </div>

                        <div class="col-lg container ">
                            <div class="container bio elementoscol">
                                
                                <h3 class="primera_linea">Jestem Juan</h3>

                                <p class="segunda_linea">Soy español, aunque ya vivo 2 años en Polonia</p>
                                <p class="segunda_linea">Decidí salir de España para cumplir mis sueños, y día a día me siento un paso más cerca de ello.</p>
                                <p class="segunda_linea">Cuando vine a Polonia me di cuenta de una gran oportunidad, y es que no hay profesores nativos españoles que puedan explicar en primera persona el por qué de las cosas en el idioma español. </p>
                                <p>Ahora vivo y estudio en Opole, y ayudo a polacos a aprender y mejorar su español, y por supuesto, a conocer todo lo que necesitan saber sobre España.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe

import React from 'react'
//COMPONENTS
import AboutMe from './AboutMe';
import Hero from './Hero';
import HeroSub from './HeroSub';
import MainNav from './MainNav';
import Products from './Products';
import Reviews from './Reviews';
import Footer from './Footer';
import Formulario from './Form';
import Acordeon from './Acordeon';

    export const AppIndex = () => {
        return (
            <div>
                
                <MainNav />
                <Hero />
                <Products />
                <AboutMe />
                <Reviews />
                <Formulario />
                <Acordeon />
                <Footer />
            </div>
        )
    };
    
    export const AppAbout = () => {
        const AboutInfo = () => {
            return ( 
                   
                <section class="sobremi columnas gris">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg container sobremi-img">
                                <div class="container img">
                                    <img src="../../images" alt="" class="fotoperfil fotoperfil-yo" />
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
        )}
        return (
            <div>
                <MainNav />
                <HeroSub />
                <AboutInfo />
                <Footer />
            </div>
        )
    };
    
    export const AppContact = () => {
        return (
            <div>
                <MainNav />
                <HeroSub />
                <Formulario />
                <Footer />
            </div>
        )
    };
       
    export const AppServices = () => {
        return (
            <div>
                <HeroSub />

            </div>
        )
    }
    
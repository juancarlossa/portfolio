import React from 'react'
import { ButtonOne } from '../templates/Boton'
import Titulo from '../templates/Titulo'

const Formulario = () => {
    return (
        <section class="formulario" id="form">
            <Titulo />
                    <form class="container" id="container-form">
                        <div class="row">
                            <div class="col-6">
                            <label for="nombre"></label>
                            <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Tu nombre" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            

                            <div class="col-6">
                            <label for="email"></label>
                            <input type="text" class="form-control" id="email" placeholder="Tu email" />
                            </div>
                        </div>
                      
                            <div class="form-group">
                                <label for="select"></label>
                                <select class="form-control" id="select" >
                                <option>Cómo me has conocido</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div> 
                            
                            <div class="form-group">
                                <label for="area"></label>
                                <textarea class="form-control" id="area" rows="3" placeholder="Tu mensaje"></textarea>
                            </div>

                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div class="container contbtn">
                            <ButtonOne />
                        </div>
                    </form>
                    <div class="right">
                        <a href="#header"><i class="fas fa-angle-up fa-2x"></i></a>
                    </div>
        </section>
    )
}

export default Formulario

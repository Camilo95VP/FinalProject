import React, { Component } from 'react'
import '../Home/Docentes.css'
import 'bulma/css/bulma.css';
import HomeNav from './HomeNav';
import Footer from '../../Shared/Footer';



export default class DocentesBody extends Component {
    render() {
        return (
            <div>
               <HomeNav/>
                <div>
                    <h2><strong>Docentes</strong> </h2>
                </div>
                <div className="column" id="container1">
                    <div className="info-title"><strong>Información basica</strong></div>
                    <table className="table" id="info">
                        <thead>
                            <tr>
                               <th>Nombres:</th>
                               <th>Gilberto Jesus</th>
                            </tr>
                            <tr>
                               <th>Apellidos:</th>
                               <th>Lopera Carmona</th>
                            </tr>
                            <tr>
                               <th>Asignatura:</th>
                               <th>Matematicas</th>
                            </tr>
                            <tr>
                               <th>Identificación:</th>
                               <th>c.c 156325926</th>
                            </tr>
                            <tr>
                               <th>Sexo:</th>
                               <th>Masculino</th>
                            </tr>
                            <tr>
                               <th>Telefono:</th>
                               <th>5982012</th>
                            </tr>
                            <tr>
                               <th>Celular:</th>
                               <th>3195784520</th>
                            </tr>
                            <tr>
                               <th>Correo:</th>
                               <th>gilberto@gmail.com</th>
                            </tr>
                            <tr>
                               <th>Dirección:</th>
                               <th>calle 1# 1-24</th>
                            </tr>
                        </thead> 
                    </table>
                </div>
                <Footer/>
            </div>
        )
    }
}

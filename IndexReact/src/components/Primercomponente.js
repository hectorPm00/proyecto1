import React from 'react';
import logo from '../img/logo.jpg';
import '../../src/App.css';


const Primercomponente = () => {
    
    return (
            <header>
                <a href="www.google.com" className="logo">
                    <img src={logo} alt="logo de la compania" />
                    <h2 id="encabezado1">Blackcoast</h2>
                </a>
                <div className="cajabuscar">
                    <form method="get" id="buscarfrom">
                        <fieldset id="caja">
                            <input type="text" id="s" value="" placeholder="Buscar" />
                            <input className="button" type="submit" value="" />
                            <i className="search"></i>
                        </fieldset>
                    </form>
                </div>
                <nav>
                    <a href="registrate/registro.html" target="_self" className="nav-link"><i className="fa-solid fa-user"></i>Pasarela de pago</a>
                    <a href="catalogo/catalogo.html" className="nav-link">Boards</a>
                    <a href="catalogo/catalogo.html" className="nav-link">surf</a>
                </nav>
            </header>
        );
    }


export default Primercomponente;
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.svg.png";
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] =  useState(0); 


  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt = "Logo de freeCodeCamp"/>
      </div>

      <div className='contenedor-contador'>
        <Contador numClics={numClics} />
        <Boton
        texto = "Clic"
        botonClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto= "Reiniciar"
        botonClic={false}
        manejarClic={reiniciarContador} />
      </div>
      
    </div>
  );
}

export default App;

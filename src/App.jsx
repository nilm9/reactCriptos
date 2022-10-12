import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;

`


const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #FFF;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
    margin: 1rem 0;
    font-size: 34px;

    &::after {
      content: '';
      width: 100px ;
      height: 6px;
      background-color: #66A2FE;
      display: block;
  margin: 10px auto 0 auto;
    }
`

function App() {

  return (
    <Contenedor>
      <Imagen src={ImagenCripto}  alt="imagenes criptomonedas"/>
         <Heading>desde app tusa</Heading>
    </Contenedor>

  )
}

export default App

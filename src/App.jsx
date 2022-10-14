import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
width: 90%;
@media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
}
`

const Imagen = styled.img`
max-width: 400px;
width: 80%;
margin: 100px auto 0 auto;
display: block;
`

const Heading = styled.h1`
font-family: 'Lato', sans-serif;
color: #FFF;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;

&::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2fe;
    display: block;
    margin:10px auto 0 auto;
}

`

const Center = styled.div`
  display: flex;
    justify-content: center;

`

const App = () => {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResutlado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const {moneda, cripto}= monedas

      const cotizarCripto = async () => {
        setCargando(true)
        setResutlado({});

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda},EUR`;

        const response = await fetch(url)
        const result =await response.json();

        //Brackets are used to search into tje object a property with this name

        setResutlado(result.DISPLAY[cripto][moneda]);
        setCargando(false);
      
      }
      cotizarCripto();

    }
  }, [monedas])


  return (
    <Contenedor>
        <Imagen
        src={ImagenCripto}
        alt="img cripto"
        />
        <div>
        <Heading> Trade Criptos </Heading>
        <Formulario setMonedas={setMonedas}/>
        <Center>
        {resultado.PRICE && <Resultado resultado={resultado} /> }
        {cargando && <Spinner/>}
        </Center>



        </div>

        


    </Contenedor>
  )
}

export default App
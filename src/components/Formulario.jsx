import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useEffect } from 'react'

const Input = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color:  #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 1rem;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = () => {

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const response = await fetch(url)
            const data = await response.json()


            const arrayCriptos = data.Data.map() => {
                const objCoin={
                    
                }
            }
        }
        consultarAPI()
    }, []);
          

  return (
    <form>
        <SelectMonedas />
        {moneda}
        <Input type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario
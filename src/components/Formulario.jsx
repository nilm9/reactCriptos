import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import {useState,  useEffect } from 'react'
import Error from './Error'

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



const Formulario = ({setMonedas}) => {

    const [error ,setError] = useState(false);

    const [criptos, setCriptos] = useState([])

    const [moneda, SelectMonedas] = useSelectMonedas('Select coin', monedas)


    const [cripto, SelectCripto] = useSelectMonedas('Select cripto', criptos)


    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const response = await fetch(url)
            const data = await response.json()


            const arrayCriptos = data.Data.map(cripto => {
                const objCoin={
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName

                }
                return objCoin
            }
            )
            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if([moneda, cripto].includes('')){
            setError(true);
            return
        }

        setError(false);
        setMonedas({
            moneda,
            cripto

        })

    }

          

  return (
    <form onSubmit={handleSubmit}>
                {error && <Error>All the fields are required</Error>}
        <SelectMonedas />
        <SelectCripto />



        <Input type="submit" value="Cotizar" />

    </form>
  )
}

export default Formulario
import React from 'react'
import styled from '@emotion/styled'

const Result = styled.div`
color: #FFF;
font-family: 'Lato', sans-serif;
`
const Text = styled.p`
    font-size: 30px;
    span{
       font-weight :800 ;
    }
`
const Price = styled.span`
    font-size: 30px;
    span{
       font-weight :700 ;
    }

`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Result>
        

        <Text>Current price: <Price>{PRICE}</Price> </Text>
        <p>Highest price of the day: <Price>{HIGHDAY}</Price> </p>
        <p>Lowest price of the day: <Price>{LOWDAY}</Price></p>
        <p>Value last 24h: <Price>{CHANGEPCT24HOUR}</Price> </p>
        <p>Last update: <Price>{LASTUPDATE}</Price> </p>





    </Result>

  )
}

export default Resultado
import React from 'react'
import styled from '@emotion/styled'

const Text = styled.div`
color: #fff;
border-radius: .5rem;
background-color: #731a1a;
padding: 1rem 2rem;
font-size: 22px;
font-family: 'Lato', sans-serif;
font-weight: 700;
text-align: center;
margin: 2rem 0;

`


const Error = ( {children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default Error
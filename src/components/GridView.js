import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

function GridView({filterProduct}) {

    const Div = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 40px;
        margin-top: 50px;

        @media (max-width: 600px){
            margin-top: 150px;
        }
    `
  return (
    <Div>
        {
            filterProduct.map((currEle, index) => {
                return(
                    <ProductCard product={currEle} key={currEle.id}/>
                )
            })
        }
    </Div>
  )
}

export default GridView
import React from 'react'
import styled from 'styled-components';
import { useMyCustomContext } from '../context/productContext'
import ProductCard from './ProductCard';
import LoadingAnimation from './LoadingAnimation'

function FeatureProducts() {

    const {featureProducts, isLoading, isError} = useMyCustomContext();

    const Div = styled.div`
    /* background-color: ${({theme}) => theme.colors.primary}; */
    margin-top: 100px;
      .h1-title{
        display: inline;
      }

      .product-cards{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        padding: 70px 100px;
        margin-top: 50px;
        /* display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        place-items: center; */
      }

      @media (max-width:600px) {
        .product-cards{
          margin-top: 20px;
        }
      }
    `

  if(isLoading === true){
    return <LoadingAnimation />
  }

  return (
    <Div>
      <center><h1 className="h1-title h1-animation">Our Featured Products</h1></center>
      <div className="product-cards">
        {
          featureProducts.map((product) => {
            return(
              <ProductCard product={product} key={product.id}/>
            )
          })
        }
      </div>
    </Div>
  )
}

export default FeatureProducts
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import AddToCart from '../components/AddToCart';
import LoadingAnimation from '../components/LoadingAnimation';
import ProductImage from '../components/ProductImage';
import Star from '../components/Star';
import { useMyCustomContext } from '../context/productContext';
import IndPrice from '../helpers/IndPrice';

function SingleProduct() {
  const {id} = useParams();
  
  const {getDataOfSingleProduct, isSingleProductLoading, isSingleProductError, singleProduct} = useMyCustomContext();

  useEffect(() => {
    getDataOfSingleProduct(`https://api.pujakaitem.com/api/products?id=${id}`);
  },[])

  const {name, company, price,image, description, stock, stars, reviews, colors} = singleProduct;

  const Div = styled.div`
    .data{
      /* width: 100vw; */
      /* height: 80vh; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 100px;
      margin: 2% 15%;
    }

    .product-img{
      width: 40%;
    }

    .product-data{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 15px;
      width: 60%;
      /* cursor: pointer; */
    }

    .fw-700{
      font-weight: 700;
      font-size: 20px;
      cursor: pointer;
    }

    .fw-500{
      font-weight: 500;
      font-size: 18px;
    }

    .name{
      font-weight: 800;
      font-size: 30px;
      text-transform: capitalize;
      cursor: pointer;
    }

    .mrp-sp{
      color: red;
    }

    .price-sp{
      color: green;
    }

    .description{
      text-align: justify;
    }

    .availabel{
      color: green;
    }

    .not-availabel{
      color: red;
    }

    .brand-sp{
      text-transform: capitalize;
    }

    hr{
      width: 100%;
      border: 2px solid black;
    }

    @media (max-width:600px){
      .data{
        flex-direction: column;
        gap: 50px;
        margin: 15% 2% 0;
      }

      .product-img, .product-data{
        width: 90%;
      }
    }
  `

  if(isSingleProductLoading === true){
    return <LoadingAnimation />
  }

  return (
    <Div>
      <div className="data">
        <div className="product-img">
          <ProductImage image={image} />
        </div>
        <div className="product-data">
            <h2 className="name">{name}</h2>
            {/* <p className="stars">{stars}</p> */}
            <Star stars={stars}/>
            <p className="reviews fw-700">Total reviews : <span className="reviews-sp fw-500">{reviews}</span></p>
            <p className='fw-700'>
              MRP : <del className="mrp-sp"> 
                <IndPrice price={price+ (price*12)/100}/>
              </del>
            </p>
            <p className="price fw-700">
              Today's Special Deal : <span className="price-sp"><IndPrice price={price}/></span>
            </p>
            <p className="description fw-700">
              Description : <span className="fw-500">{description}</span>
            </p>
            <div className="availabel-or-not fw-700">
              Stock : <span className="availabel">
                {stock > 0 ? "Availabel" : ""}
              </span> <span className="not-availabel">
                {stock <= 0 ? "Not Availabel" : ""}
              </span>
            </div>
            <p className="brand fw-700">
              Brand : <span className='fw-500 brand-sp'>{company}</span>
            </p>
            {
              stock && 
              <>
              <hr />
              <AddToCart id={id} colors={colors} stock={stock} product={singleProduct}/>
              </>
            }
        </div>
      </div>
    </Div>
  )
}

export default SingleProduct
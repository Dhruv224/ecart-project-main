import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import IndPrice from '../helpers/IndPrice';

function ProductCard({product}) {

    const {company, category, description, id, image, name, price} = product;

const Div = styled.div`
    a{
        text-decoration: none;
    }

    .card{
        max-width: 270px;
        height: 360px;
        border-radius: 5px;
        color: black;
        box-shadow: 0 2px 8px ${({theme}) => theme.colors.black};
        padding: 10px;
        margin-bottom: 20px;
        position: relative;
        transition: all 0.5s;
        /* background-image: linear-gradient(to top,#154a75,#000513);
        color: white; */
    }

    .card:hover{
        transform: scale(1.05);
        /* background-image: linear-gradient(to bottom, rgba(24, 64, 165, 0.5), rgba(24,54,165,1)); */
        /* color: white; */
    }

    .card-img img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0px 0px 5px black;
    }

    .d-flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .name, .price{
        font-size: 18px;
        font-weight: 900;
        margin: 10px 0;
        text-transform: uppercase;
    }

    .category, .company{
        font-size: 14px;
        font-weight: 400;
        margin: 10px 0;
        text-transform: capitalize;
    }

    hr{
        height: 2px;
        background-color: black;
        margin:3px 0 8px 0;
    }

    .description{
        /* width: 270px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
        width: 250px;
        text-align: justify;
        font-size: 14px;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;

    }
`
  return (
    <Div>
        <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <div className="card-img">
                <img src={image} alt={name}/>
            </div>

            <div className="name-price d-flex">
                <span className="name">{name}</span>
                <span className="price"><IndPrice price={price} /></span>
            </div>

            <div className="otherinfo d-flex">
                <span className="category">Cat : {category}</span>
                <span className="company">Mfg : {company}</span>
            </div>
            {/* <hr /> */}
            <div className="description">
                {description}
            </div>
        </div>
        </NavLink>
    </Div>
  )
}

export default ProductCard


// category: "watch"
// company: "samsung"
// description: "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it."
// featured: true
// id: "thapaserialnol"
// image: "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// name: "galaxy w20"
// price: 311999
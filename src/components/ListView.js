import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import IndPrice from '../helpers/IndPrice';
import { Btn } from '../styles/Button';

function ListView({ filterProduct }) {
    const Div = styled.div`
    margin-top: 60px;

    a{
        text-decoration: none;
    }

    .card{
        max-width: 100%;
        height: 250px;
        border-radius: 5px;
        color: black;
        box-shadow: 0 2px 8px ${({ theme }) => theme.colors.black};
        padding: 10px;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        align-items: center;
        gap: 50px;
        transition: all 0.8s;
    }

    .card:hover{
        transform: scale(1.02);
    }

    .card-img img{
        width: 355px;
        height: 220px;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0px 0px 5px black;
    }

    .card-data{
        width: 50%;
        height: 100%;
    }

    .d-flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .name, .price{
        font-size: 30px;
        font-weight: 900;
        margin: 10px 0;
        text-transform: uppercase;
    }

    .category, .company{
        font-size: 20px;
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
        width: 100%;
        text-align: justify;
        font-size: 16px;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .button-explore{
        margin-top: 10px;
    }

    @media (max-width: 600px){
        margin-top: 150px;
        .card{
            height: 100px;
            gap: 20px;
        }

        .card-img img{
            width: 100px;
            height: 80px;
        }

        .card-data{
            display: flex;
            flex-direction: column;
            /* align-items: center; */
            justify-content: center;
            width: 100%;
        }

        .name{
            font-size: 14px;
        }

        .price{
            font-size: 16px;
            color: green;
        }

        .company, .category, .description{
            display: none;
        }

        .button-explore{
            margin: 0px;
            font-size: 12px;
            padding: 5px 10px;
        }

        .nav-btn{
            display: inline-block;
            text-align: center;
        }
    }
`
    return (
        <Div>
            {
                filterProduct.map((currEle, index) => {
                    const { company, category, description, id, image, name, price } = currEle;
                    return (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={image} alt={name} />
                            </div>

                            <div className="card-data">
                                <div className="name-price d-flex">
                                    <span className="name">{name}</span>
                                    <span className="price"><IndPrice price={price} /></span>
                                </div>

                                <div className="otherinfo d-flex">
                                    <span className="category">Cat : {category}</span>
                                    <span className="company">Mfg : {company}</span>
                                </div>
                                <hr />
                                <div className="description">
                                    {description}
                                </div>

                                <NavLink to={`/singleproduct/${id}`} className='nav-btn'>
                                    <Btn className='button-explore'>
                                        Explore product
                                    </Btn>
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </Div>
    )
}

export default ListView
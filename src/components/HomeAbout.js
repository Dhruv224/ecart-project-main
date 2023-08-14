import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Btn } from '../styles/Button'

function HomeAbout(props) {
    const Div = styled.div`
        width: 100%;
        height: calc(100vh - 150px); //65vh
        height: 90vh;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('./images/background-white.jpeg');
        opacity: 1;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        .info{
            margin-left: -40%;
            max-width: 30%;
        }

        .info-p{
            text-align: justify;
            margin-bottom: 0;
            font-size: 20px;
        }

        .info-h1{
            margin-bottom: 4px;
            font-weight: bold;
            font-size: 40px;
            letter-spacing: 2px;
            text-shadow: 1.5px 1.5px ${({theme}) => theme.colors.primary}, -1px -1px red;
        }

        .main-img img{
            /* width: 275px; */
            /* height: 260px; */
            object-fit: cover;
            display: none;
        }

        .info-btn{
            margin-top: 20px;
        }

        @media (max-width: ${({ theme }) => theme.media.tab}) and (min-width: 769px) {
            .info-p{
                font-size: 15px;
            }

            .info-h1{
                font-size: 35px;
            }

            .main-img img{
                margin-left: 40px;
            }
        }

        @media (max-width: ${({ theme }) => theme.media.mobile}) {
            background: none;
            flex-direction: column-reverse;

            .info{
                max-width: 90%;
                margin: 0;
            }

            .info-p{
                font-size: 14px;
            }

            .info-btn{
                margin-top: 20px;
            }

            .main-img img{
                display: block;
                margin: 0 0 50px;
                height: auto;
                width: 250px;
            }
        }
    `

    return (
        <Div>
            <div className="info">
                <p className="info-p">Welcome to</p>
                <h1 className="info-h1">{props.name}</h1>
                <p className="info-p">We're super excited to see you join the E - Cart community. We hope you will be happy with our products and that you will shop with us again and again. Our goal is to offer the widest range of products offered by the E - Cart at the highest quality with maximum discount.</p>
                <NavLink to='/products'>
                    <Btn className='info-btn'>explore item</Btn>
                </NavLink>
            </div>

            <div className="main-img">
                <img src="./images/mainimg.jpg" alt="Main logo hai" />
            </div>
        </Div>
    )
}

export default HomeAbout
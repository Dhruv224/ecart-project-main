import React from 'react'
import styled from 'styled-components'
import {MdOutlineRateReview, MdOutlineLocalOffer} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
import {RiSecurePaymentLine} from 'react-icons/ri';

function Services() {

    const Div = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center; 
        padding: 80px 0;
        margin: 60px 0;
        flex-wrap: wrap;
        gap: 20px;
        /* box-shadow: 0 0 10px ${({theme}) => theme.colors.black}; */
        background-color: ${({theme}) => theme.colors.primary};
        /* background-image: linear-gradient(to top,#154a75,#000513); */

        .service-div{
            border: 2px solid ${({theme}) => theme.colors.primary};
            border-radius: 5px;
            min-width: 320px;
            padding: 35px;
            background-color: ${({theme}) => theme.colors.primary};
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: all 0.6s;
            box-shadow: 3px 4px 8px black;
            background-color: white;
            color: black;
        }

        .icon{
            background-color: transparent;
            font-size: 60px;
            margin-bottom: 15px;
            font-weight: 800;
        }

        .info{
            font-weight: bolder;
            font-size: 18px;
        }

        .service-div:hover{
            transform: scale(1.10);
        }

        @media (max-width: ${({theme}) => theme.media.tab}) and (min-width: 769px){
            padding: 30px;

            .service-div{
                min-width: 320px;
            }
        }

        @media (max-width: ${({theme}) => theme.media.mobile}) {
            margin-top: 100px;
            padding: 80px 80px;

            .service-div{
                max-width: 300px;
                margin: 20px 0;
            }

            .info{
                font-size: 18px;
            }
        }
    `

    return (
    <Div>
        <div className="first service-div">
            <TbTruckDelivery className='icon'/>
            <p className="info">Easy and Fast Delivery</p>
        </div>
        <div className="second service-div">
            <MdOutlineLocalOffer className='icon'/>
            <p className="info">Special Offers and Discounts</p>
        </div>
        <div className="third service-div">
            <RiSecurePaymentLine className='icon'/>
            <p className="info">Fast and Secure Payment</p>
        </div>
        <div className="fourth service-div">
            <MdOutlineRateReview className='icon'/>
            <p className="info">Product Reviews</p>
        </div>
    </Div>
  )
}

export default Services
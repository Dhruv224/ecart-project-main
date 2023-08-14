import React from 'react'
import styled from 'styled-components'
import {BsApple, BsFillBagCheckFill,BsFillPrinterFill, BsBroadcastPin, BsTriangleFill} from 'react-icons/bs'

function TrustedCompanys() {

    const Div = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 250px 0;


        .title{
            font-weight: bold;
            font-size: 40px;
        }

        .company-logos{
            width: 70%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 70px 0;
        }

        .icon{
            font-size: 55px;
            transition: all 0.8s;
        }

        .icon:hover{
            color: ${({theme}) => theme.colors.primary};
            transform: scale(1.12);
        }

        @media (max-width: ${({theme}) => theme.media.mobile}){
            margin: 100px 0;
            .company-logos{
                width: 100%;
            }

            .icon{
                font-size: 35px;
            }
        }
    `

  return (
    <Div>
        <h1 className='title h1-animation'>Trusted Company</h1>
        <div className='company-logos'>
            <p title='APPLE'><BsApple className='icon'/></p>
            <p title='JIO'><BsBroadcastPin className='icon'/></p>
            <p title='DELTA'><BsTriangleFill className='icon'/></p>
            <p title='SHOPIFY'><BsFillBagCheckFill className='icon'/></p>
            <p title='XEROX'><BsFillPrinterFill className='icon'/></p>
        </div>
    </Div>
  )
}

export default TrustedCompanys
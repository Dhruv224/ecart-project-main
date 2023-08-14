import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {BsInstagram, BsYoutube, BsLinkedin, BsTwitter} from 'react-icons/bs';

function Footer() {
    const Div = styled.div`
        background-color: ${({theme}) => theme.colors.primary};
        color: white;
        padding: 3% 10% 0.5%;
        margin-top: 100px;
        box-shadow: 0 0 10px ${({theme}) => theme.colors.primary};
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        /* background-image: linear-gradient(to top,#154a75,#000513); */

        .various-country{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            list-style: none;
            font-size: 25px;
            font-weight: 800;
            margin: 20px 0 10px;
            cursor: pointer;
        }

        .various-country li:hover{
            color: rgba(255,255,255,0.8)
        }

        .various-country li:nth-child(even){
            font-size: 18px;
        }

        .various-country li:nth-child(even):hover{
            color: #fff;
        }

        footer{
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
        }
        
        .footer-heading{
            font-size: 25px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.6s;
            text-align: center;
        }

        .footer-heading:hover{
            color: rgba(255,255,255,0.6);
        }

        .col-ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        .flex-row{
            flex-direction: row;
            justify-content: space-around;
            margin-top: 20px;
            font-size: 20px;
        }

        a{
            text-decoration: none;
            list-style: none;
            color: white;
            margin-bottom: 8px;
        }

        a:hover{
            color: rgba(255,255,255,0.8);
        }

        /* 
        .insta:hover{background-color: white;color: #8a3ab9;}
        .yt:hover{background-color: white;color: #FF0000;}
        .linkedin:hover{background-color: white;color: #0A66C2;}
        .twitter:hover{background-color: white;color: #00acee;} 
        */

        .copy-right{
            text-align: center;
            margin: 30px 0;
            font-size: 20px;
            font-weight: 800;
        }

        hr{
            height: 3px;
            background-color: white;
        }

        @media (max-width: ${({theme}) => theme.media.mobile}) {
            padding-top: 4%;
            footer{
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }

            .footer-heading{
                font-size: 22px;
                border-bottom: 2px solid white;
            }

            .col-ul{
                align-items: center;
            }

            .copy-right{
                font-size: 17px;
            }
        }
    `
  return (
    <Div>
        <footer>
            <div className="col-1">
                <p className='footer-heading'>about</p>
                <ul className='col-ul'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/cart'>Cart</NavLink>
                    <NavLink to='/contect'>Contect</NavLink>
                </ul>
            </div>

            <div className="col-2">
                <p className="footer-heading">Social Media</p>
                <ul className="col-ul flex-row">
                    <a href='https://www.instagram.com' className='insta' target='_blank'><BsInstagram /></a>
                    <a href='https://www.youtube.com' className='yt' target='_blank'><BsYoutube /></a>
                    <a href='https://www.linkedin.com' className='linkedin' target='_blank'><BsLinkedin /></a>
                    <a href='https://www.twitter.com' className='twitter' target='_blank'><BsTwitter /></a>
                </ul>
            </div>

            <div className="col-3">
                <p className="footer-heading">Customer care</p>
                <ul className="col-ul">
                    <NavLink to=''>FAQ</NavLink>
                    <NavLink to=''>Shipping & Delivery</NavLink>
                    <NavLink to=''>Offers</NavLink>
                    <NavLink to=''>Return & Exchange</NavLink>
                </ul>
            </div>
        </footer>

        <ul className="various-country">
            <li>IND</li>
            <li>|</li>
            <li>USA</li>
            <li>|</li>
            <li>UK</li>
            <li>|</li>
            <li>AUS</li>
            <li>|</li>
            <li>CA</li>
        </ul>

        <hr />

        <div className="copy-right">
            <p>
                &#169; E - Cart | All Rights Reserved | 2022 <br />
                Developed with &#9825; By Dhruv
            </p>
        </div>
    </Div>
  )
}

export default Footer
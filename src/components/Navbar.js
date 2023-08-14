import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import {FaPeopleCarry} from 'react-icons/fa';   
import { useCartContext } from '../context/cartContext';
import { Btn } from '../styles/Button';
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {

    const {cart} = useCartContext();
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const [mobIcon, setMobIcon] = useState(false);

    const Nav = styled.nav`
        .navbar{
            width:100%;
            padding: 15px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${({theme}) => theme.colors.primary};
            /* background-color: #095784; */
            /* background-color: #1840a5; */
            box-shadow: 0 0 10px ${({theme}) => theme.colors.primary};
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            /* background-image: linear-gradient(to right,#154a75,#000513); */
        }

        .logo-div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
        }

        .icon{
            font-size: 30px;
        }

        .logo-heading{
            font-size: 40px;
        }

        .navbar-lists{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }

        .navbar-link{
            list-style: none;
            font-size: 20px;    
            text-transform: uppercase;
        }

        .login-logout-cart{
            border-color: white;
        }

        a{
            text-decoration: none;
            color: black;
            font-weight: 700;
            color: white;
        }

        a:hover{
            color: rgba(255, 255, 255, 0.8);
        }

        .navbar-lists-item-div{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .cart-item{
            position: relative;
            font-size: 35px;
        }

        .trolly-item{
            min-width: 20px;
            text-align: center;
            position: absolute;
            top: -5px;
            right: -30%;
            padding: 1px 3px;
            background: white;
            color: ${({theme}) => theme.colors.primary};
            border-radius: 100%;
            font-size: 14px;
            font-weight: 600;
            font-weight: 900;
        }

        .hr-line{
            margin-top: 0;
            color: black;
            height: 2px;
        }

        .mobile-navbar-btn{
            display: none;
            cursor: pointer;
            border: none;
        }

        .mobile-nav-icon[name="close-outline"] {
            display: none;
        }

        .close-outline {
            display: none;
        }

        @media (max-width: ${({ theme }) => theme.media.mobile}) {
            a{
                color: white;
            }
            .active.navbar{
                height: 100vh;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
            }
            .mobile-navbar-btn {
                display: block;
                z-index: 9999;
            }
            .mobile-nav-icon {
                font-size: 30px;
                color: white;
            }
            .active .mobile-nav-icon {
                display: none;
                position: absolute;
                top: 4.5%;
                right: 6%;
                color: white;
                z-index: 9999;
            }
            .active .close-outline {
                display: inline-block;
                font-size: 30px;
            }
            .logo-heading{
                font-size: 30px;
            }
            .logo-div{
                gap: 10px;
            }
            .icon{
                font-size: 20px;
            }
            .navbar-lists{
                height: 100vh;
                position: absolute;
                top: 0;
                left: 0;
                background-color: ${({theme}) => theme.colors.primary};
                flex-direction: column;
                visibility: hidden;
                opacity: 0;
                transform: translateX(100%);
                border-bottom-left-radius: 50px;
                border-bottom-right-radius: 50px;
            }
            .active .navbar-lists {
                width: 100vw;
                visibility: visible;
                opacity: 1;
                transform: translateX(0);
                z-index: 999;
                transform-origin: right;
            }
            .active .navbar-link{
                margin-bottom: 15px;
            }

            .icon-hidden-mob{
                display: none;
            }
        }
    `

    return (
        <Nav>
            <div className={ mobIcon ? "navbar active" : "navbar"}>
                <div>
                    <NavLink to="/" className='logo-div'>
                        {/* <img src="./images/logo_prev_ui.png" alt="LOGO" srcset="" className="logo" /> */}
                        <p className="logo-heading">E - Cart</p>
                        {/* <FaPeopleCarry className='icon icon-hidden-mob'/> */}
                    </NavLink>
                </div>
                <div className='navbar-lists-item-div'>
                    <ul className="navbar-lists">
                        <li className="navbar-link">
                            <NavLink to="/" onClick={() => setMobIcon(false)}>
                                home
                            </NavLink>
                        </li>
                        <li className="navbar-link">
                            <NavLink to="/about" onClick={() => setMobIcon(false)}>
                                about
                            </NavLink>
                        </li>
                        <li className="navbar-link">
                            <NavLink to="/products" onClick={() => setMobIcon(false)}>
                                products
                            </NavLink>
                        </li>
                        <li className="navbar-link">
                            <NavLink to="/contect" onClick={() => setMobIcon(false)}>
                                contect
                            </NavLink>
                        </li>
                        {
                            isAuthenticated ? 
                            <li className="navbar-link">
                                <Btn className="login-logout-cart" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Btn>
                            </li>
                            :
                            <li className="navbar-link">
                                <Btn className="login-logout-cart" onClick={() => loginWithRedirect()}>Login</Btn>
                            </li>
                        }

                        
                        <li className="navbar-link">
                            <NavLink to="/cart" className="cart-item" onClick={() => setMobIcon(false)}>
                                <FiShoppingCart className="cart-trolley" />
                                <span className="trolly-item"> {cart.length} </span>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="mobile-navbar-btn">
                        <CgMenu
                            name="menu-outline"
                            className="mobile-nav-icon"
                            onClick={() => setMobIcon(true)}
                        />
                        <CgClose
                            name="close-outline"
                            className="mobile-nav-icon close-outline"
                            onClick={() => setMobIcon(false)}
                        />
                    </div>
                </div>
            </div>
            {/* <hr className='hr-line' /> */}
        </Nav>
    )
}

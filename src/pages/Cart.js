import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/cartContext'
import { Btn } from '../styles/Button';
import {FaRegHandPointDown, FaHandPointLeft, FaTrash} from 'react-icons/fa';
import IndPrice from '../helpers/IndPrice';
import { useAuth0 } from "@auth0/auth0-react";

function Cart() {
  const {cart, clearCart, subTotal, shipping} = useCartContext();
  const { user, isAuthenticated } = useAuth0();

  const Div = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;
    margin-top: 50px;
    padding: 20px;

    .cart-items-div{
      flex-basis: 65%;
      padding: 15px;
      box-shadow: 0px 0px 5px ${({theme}) => theme.colors.black};
      border-radius: 5px;

      .grid-five-column {
        display: grid;
        grid-template-columns:1.5fr repeat(4, 1fr);
        text-align: center;
        align-items: center;

        p{
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          color: ${({theme}) => theme.colors.black};
        }
      }

      hr{
          border: 1px solid ${({theme}) => theme.colors.black};
          margin: 20px 0;
        }
    }

    .cart-items{
      display: flex;
      flex-direction: column;
      /* gap: 15px; */
      margin: 15px 0;
    }

    .two-btn{
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .clear-cart{
        border-color: #dc3545;
        background-color: #dc3545;
      }

      .clear-cart:hover{
        color: #dc3545;
      }
    }

    .sub-total-div{
      flex-basis: 30%;
      padding: 15px;
      height: 376px;
      box-shadow: 0px 0px 5px ${({theme}) => theme.colors.black};
      border-radius: 5px;

      hr{
        height: 2px;
        /* background-color: ${({theme}) => theme.colors.black}; */
        margin-top: 5px;
      }
    }

    .h1-animation{
      font-size: 25px;
      text-transform: capitalize;
    }

    .flex{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      p:first-child{
        font-size: 20px;
        text-transform: capitalize;
      }

      p:last-child{
        font-size: 24px;
        font-weight: 600;
        color: #434747;
      }
    }

    .discount{
      color: #297229 !important;
    }

    .total{
      color: ${({theme}) => theme.colors.primary} !important;
    }

    .btn{
      margin-top: 20px;
    }


    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      flex-direction: column;

      .cart-items-div{
        flex-basis: 100%;
  
      .grid-five-column {
        grid-template-columns: 1.5fr 0.8fr 0.5fr;
      }

      .cart-heading{
        p{
          font-size: 13px;
          font-weight: 700;
        }
      }

      .cart-hide {
        display: none;
      }

      .continue-shopping, .clear-cart{
        font-size: 8px;
      }

      .two-btn{
        gap: 5px;
      }
  }
    }
  `

  const Wrapper = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    p{
      font-size: 40px;
      font-weight: 600;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}){
      height: 50vh;
      p{
        text-align: justify;
        font-size: 20px;
      }
    }
  `

  if(!cart.length){
    return <Wrapper>
      <p>Cart Is Empty... Add Items From Here  <FaRegHandPointDown /></p>
      <NavLink to='/products'>
        <Btn>add Item</Btn>
      </NavLink>
    </Wrapper>
  }
  return (
    <>
    {/* <h2>Welcome {isAuthenticated ? user?.name :  " "}</h2> */}
    <Div>
      <div className="cart-items-div">
        <div className="cart-heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>

        <hr />
        <div className="cart-items">
          {
            cart.map((currEle) => {
              return <CartItem key={currEle.id} cartData={currEle}/>
            })
          }
        </div>
        
        <div className="two-btn">
          <div>
            <NavLink to='/products'>
              <Btn className="continue-shopping"><FaHandPointLeft/> Continue shopping</Btn>
            </NavLink>
          </div>
          <div>
              <Btn className="clear-cart" onClick={() => clearCart()}><FaTrash /> Clear cart</Btn>
          </div>
        </div>
      </div>
      <div className="sub-total-div">
          <h2 className='h1-animation'>order summary {isAuthenticated ? " --- " + user?.name :  " "}</h2>

          <div className="flex">
            <p>subtotal</p>
            <p><IndPrice price={subTotal}/></p>
          </div>

          <div className="flex">
            <p>shipping & handling</p>
            <p><IndPrice price={shipping} /> </p>
          </div>

          <div className="flex">
            <p>GST (12%)</p>
            <p><IndPrice price={subTotal * 0.12}/></p>
          </div>

          <div className="flex">
            <p>discount (3%)</p>
            <p className='discount'> - <IndPrice price={subTotal * 0.03} /></p>
          </div>

          <hr/>

          <div className="flex">
            <p>total</p>
            <p className='total'><IndPrice price={subTotal + shipping + (subTotal * 0.12) - (subTotal * 0.03)}/></p>
          </div>

          <Btn className='btn'>checkout</Btn>
      </div>
    </Div>
    </>
  )
}

export default Cart
import React, { useState } from 'react'
import styled from 'styled-components'
import {VscCheckAll} from 'react-icons/vsc';
import {FiMinusCircle, FiPlusCircle} from 'react-icons/fi';
import { Btn } from '../styles/Button'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

function  AddToCart({id, colors, stock, product}) {

    const {addToCart} = useCartContext();
    const [colorState, setColorState] = useState(colors[0]);
    const [qtyState, setQtyState] = useState(1);

    const incQty = () => {
        qtyState < stock ? setQtyState(qtyState + 1) : setQtyState(stock);
    }

    const decQty = () => {
        qtyState > 1 ? setQtyState(qtyState - 1) : setQtyState(1);
    }

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;

        .fw-700{
            font-weight: 700;
            font-size: 20px;
            cursor: pointer;
            display: inline-block;
        }

        .color{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .color-btn{
            height: 20px;
            width: 20px;
            border-radius: 50%;
            margin-left: 10px;
            cursor: pointer;
            border: none;
            outline: none;
        }

        .active{
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 5px ${({theme}) => theme.colors.black};
            border: 2px solid white;
            border-radius: 50%;
        }

        .icon{
            color: white;
            font-size: 20px;
            font-weight: 900;
        }

        .quantity p{
            display: inline-block;
            text-align: center;
            align-items: center;
            margin-right: 20px;
        }

        .plus, .minus{
            font-size: 21px;
            cursor: pointer;
        }

        .pointer-none{
            cursor: not-allowed;
        }

        .minus:hover{
            color: red;
        }

        .plus:hover{
            color: green;
        }

        .quantity:nth-child(2){
            font-size: 30px;
        }
    `
  return (
    <Div>
        <div className="colors">
            <p className="color fw-700">
                <p className="fw-700">Availabel Colors : </p>
                {
                    colors.map((currClr) => {
                        return(
                            <button className={colorState === currClr ? "color-btn fw-500 active" : "color-btn fw-500"} 
                            style={{backgroundColor: currClr}} onClick={() => setColorState(currClr)}>
                            {
                                colorState === currClr ? <VscCheckAll className='icon'/> : ""
                            }
                            </button>
                        )
                    })
                }
            </p>
        </div>

        <div className="quantity">
            <p className={qtyState === 1 ? 'pointer-none minus' : 'minus'} onClick={() => decQty()}><FiMinusCircle /></p>
            <p className="display-qty">{qtyState}</p>
            <p className={qtyState === stock ? 'pointer-none plus' : 'plus'} onClick={() => incQty()}><FiPlusCircle /></p>
        </div>

        <NavLink to='/cart'
            onClick={() => {addToCart(id, colorState, qtyState, product)}}
        >
            <Btn>add to cart</Btn>
        </NavLink>
    </Div>
  )
}

export default AddToCart
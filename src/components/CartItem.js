import React from 'react'
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import IndPrice from '../helpers/IndPrice';
import {FiMinusCircle, FiPlusCircle} from 'react-icons/fi';
import { useCartContext } from '../context/cartContext';

function CartItem({cartData}) {
    const {removeItem, increamentQty, decreamentQty} = useCartContext();
    const {id, name, color, price, qty, image, max} = cartData;
    console.log(cartData)

    const Div = styled.div`
        display: grid;
        grid-template-columns: 1.5fr repeat(4, 1fr);
        text-align: center;
        align-items: center;

        .item{
            padding-left: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 10px;
            border-left: 4px solid;

            .img-div{
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 5px;
                }
            }

            .data-div{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;

                .name{
                    font-size: 18px;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .color-div {
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    font-size: 16px;
                    font-weight: 600;
                    
                    .color {
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                    }
                }
            }
        }

        .price{
            font-size: 18px;
            font-weight: 600;
        }

        .quantity{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }

        .display-quantity{
            margin-top: -3px;
            font-size: 22px;
        }

        .plus, .minus{
            font-size: 18px;
            cursor: pointer;
        }

        .plus:hover{
            color: green;
        }

        .minus:hover{
            color: red;
        }

        .pointer-none{
            cursor: not-allowed;
        }

        .remove-btn{
            color: #dc3545;
            font-size: 20px;
            font-weight: 600;
            opacity: 1;
            transition: all 0.5s;
        }

        .remove-btn:hover{
            opacity: 0.7;
        }

        hr{
            border: 2px solid red;
        }

        @media (max-width: ${({theme}) => theme.media.mobile}){
            grid-template-columns: 1.5fr repeat(2, 1fr);
            grid-template-columns: 1.5fr 1fr 0.5fr;
            .item{
                padding-left: 0;

                .img-div{
                    img{
                        width: 26px;
                        height: 26px;
                        margin-left: 4px;
                        margin-top: 3px;
                    }
                }

                .data-div{
                    .name{
                        font-size: 14px;
                    }

                    .color-div{
                        font-size: 12px;

                        .color{
                            width: 13px;
                            height: 13px;
                        }
                    }
                }
            }
            .quantity{
                gap: 12px;
            }

            .display-quantity{
                font-size: 20px;
                font-weight: 500;
                margin-top: -5px;
            }
        }
    `
  return (
    <Div>
        <div className="item" style={{borderLeftColor: color}}>
            <div className="img-div">
                <img src={image} alt={name} />
            </div>
            <div className="data-div">
                <p className="name">
                    {name}
                </p>
                <div className="color-div">
                    <p>Color : </p>
                    <div className="color" style={{backgroundColor: color}}>

                    </div>
                </div>
            </div>
        </div>

        <p className="price cart-hide">
            <IndPrice price={price} />
        </p>
        
        <div className="quantity">
            <p className={qty == 1 ? 'pointer-none minus' : 'minus'} onClick={() => decreamentQty(id)}><FiMinusCircle /></p>
            <p className="display-quantity">{qty}</p>
            <p className={qty == max ? 'pointer-none plus' : 'plus'} onClick={() => increamentQty(id)}><FiPlusCircle /></p>
        </div>
        <p className="price subtotal cart-hide">
            <IndPrice price={price*qty} />
        </p>
        <p className="remove">
            <FaTrash className="remove-btn" onClick={() => removeItem(id)}/>
        </p>

        <hr />
        <hr className='cart-hide'/>
        <hr />
        <hr className='cart-hide'/>
        <hr />
    </Div>
  )
}

export default CartItem;
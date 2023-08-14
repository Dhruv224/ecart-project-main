import styled from "styled-components";

export const Btn = styled.button`
    font-size: 20px;
    padding: 5px 20px;
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    font-weight: bold;
    border: 2px solid ${({theme}) => theme.colors.primary};
    outline: none;
    border-radius: 5px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 2s;
    letter-spacing: 0.9px;
    word-spacing: 3px;
    position: relative;
    overflow: hidden;
    /* background-image: linear-gradient(to right,#154a75,#000513); */

    a{
        text-decoration: none;
    }

    &::before{
        content: "";
        position: absolute;
        top:0;
        left: -50px;
        width: 0;
        height: 100%;
        background-color: white;
        transform: skewX(35deg);
        z-index: -1;
        transition: width 2s;
    }

    &:hover{
        transform: scale(0.96);
        background-color: white;
        color: ${({theme}) => theme.colors.primary};
    }

    &:hover::before{
        width: 150%;
    }
`
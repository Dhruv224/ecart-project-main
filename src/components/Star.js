import React from 'react'
import {BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs'
import styled from 'styled-components';

function Star({stars}) {
    let whNum = Math.floor(stars);
    let decimal = stars - whNum;
    let fs=0, hs=0, es=0;

    const list = [];
    for(let i=0; i<whNum; i++){
        list.push(<BsStarFill style={{fontSize: "25", padding: "2px", color: "#1840a5"}}/>);
        fs++;
    }

    if(decimal >= 0.5){
        list.push(<BsStarHalf style={{fontSize: "25", padding: "2px", color: "#1840a5"}}/>);
        hs++;
    }

    es = 5 - fs - hs;

    for(let i=0; i<es; i++){
        list.push(<BsStar style={{fontSize: "25", padding: "2px", color: "#1840a5"}}/>);
    }

    const Div = styled.div`
        p{
            font-weight: 900;
            text-align: center;
        }
    `

  return (
    <Div>
        {/* <AiFillStar style={{color: "blue"}}/>
        <BsStarHalf style={{color: "blue"}}/>
        <BsStar style={{color: "blue"}}/> */}

        <p>{list}</p>
    </Div>
  )
}

export default Star
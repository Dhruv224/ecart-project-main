import React from 'react'
import styled from 'styled-components'

function LoadingAnimation() {
    const Div = styled.div`
        .middle{
            max-width: 100vw;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .bar{
            background: white;
            transform-origin: bottom center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            animation: loader 0.6s linear infinite;
            width: 20px;
            height: 70px;
            display: inline-block;
            margin-right: 5px;
        }

        .bar1{
            animation-delay: 0.1s;
        }
        .bar2{
            animation-delay: 0.2s;
        }
        .bar3{
            animation-delay: 0.3s;
        }
        .bar4{
            animation-delay: 0.4s;
        }
        .bar5{
            animation-delay: 0.5s;
        }

        @keyframes loader{
            0%{
                transform: scaleY(0.1);
                background: transparent;
            }
            50%{
                transform: scaleY(1);
                background: ${({theme}) => theme.colors.primary};
            }
            100%{
                transform: scaleY(0.1);
                background: transparent;
            }
        }
    `
  return (
    <Div>
        <div className="middle">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
        </div>
    </Div>
  )
}

export default LoadingAnimation
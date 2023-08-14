import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Btn } from '../styles/Button'

function ErrorPage() {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px);

    .not-found-number{
      font-size: 70px;
      text-shadow: 0 0 10px red;
    }

    .not-found-text{
      font-size: 40px;
      margin: 20px 0;
    }

    .buttons{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin: 20px;
    }
  `
  return (
    <Div>
      <p className="not-found-number">404</p>
      <h2 className="not-found-text">Opps!! Page not found</h2>
      <div className="buttons">
        <NavLink to='/'>
          <Btn>home</Btn>
        </NavLink>
        <NavLink to='contect'>
          <Btn>contect us</Btn>
        </NavLink>
      </div>
    </Div>
  )
}

export default ErrorPage
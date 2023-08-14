import React from 'react'
import styled from 'styled-components'
import {BsList, BsGrid} from 'react-icons/bs'
import { useFilterContext } from '../context/filterContext'

function Sort() {
  const {gridViewTrue, gridViewFalse, gridView, filterProduct, sorting, sortingValue} = useFilterContext();

  const Div = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0px 3px black;

    .icon{
      font-size: 30px;
      margin-right: 10px;
      padding: 4px;
      border-radius: 2px;
      cursor: pointer;
    }

    .active{
      background-color: ${({theme}) => theme.colors.primary};
      color: white;
    }

    .product-data{
      font-weight: 900;
      font-size: 20px;
    }

    .sort-select{
      width: 150px;
      height: 30px;
      border: 2px solid ${({theme}) => theme.colors.primary};
      outline: none;
      font-size: 16px;
      font-weight: 800;
      color: ${({theme}) => theme.colors.primary};

      option{
        font-weight: 600;
        color: ${({theme}) => theme.colors.primary};
      }
    }

    @media (max-width: 600px){
      flex-direction: column;
      padding: 10px;
      justify-content: space-around;
      gap: 20px;
    }
  `
  
  return (
    <Div>
      <div className="list-grid-icon">
        <BsList className={gridView ? 'icon' : 'icon active'} onClick={gridViewFalse}/>
        <BsGrid className={gridView ? 'icon active' : 'icon'} onClick={gridViewTrue}/>
      </div>

      <div className="product-data">
        Total Available Products : {filterProduct.length}
      </div>

      <div className="dropdown-menu">
      <form>
          {/* <label htmlFor="sort"></label> */}
          <select name="sort" id="sort" defaultValue={`${sortingValue}`} className='sort-select' onChange={sorting} >
            <option value="selectany" disabled>Select Any</option>
             <optgroup label='Price'>
              <option value="ltoh">Increasing</option>
              <option value="htol">Decreasing</option>
            </optgroup>
            <optgroup label='Product Name'>
              <option value="atoz">Ascending</option>
              <option value="ztoa">Descending</option>
            </optgroup>  
          </select>
        </form>
      </div>
    </Div>
  )
}

export default Sort
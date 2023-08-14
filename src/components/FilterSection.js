import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'
import {VscCheckAll} from 'react-icons/vsc';
import IndPrice from '../helpers/IndPrice';
import {Btn} from '../styles/Button'

function FilterSection() {
  const {filters: {text,category, company, color, maxPrice, price, minPrice}, searchAndUpdate, allFilterProduct, clearFilters} = useFilterContext();
  
  const getUniqueData = (data, property) => {
    let newData = data.map((currEle) => {
      return currEle[property];
    })

    if(property === "colors"){
      // return ["All", ...new Set([].concat(...newData))];
      newData = newData.flat();
    }

    newData = ["All", ...new Set(newData)];
    return newData;
  }

  const categoryData = getUniqueData(allFilterProduct, "category");
  const companyData = getUniqueData(allFilterProduct, "company");
  const colorsData = getUniqueData(allFilterProduct, "colors");
  // console.log(colorsData);
  return (
    <Div>
      <div className="search">
        <form>
          <input type="text" name='text' id='input-text' value={text} className='search-input' onChange={searchAndUpdate} placeholder="Search" autoFocus/>
          {/* <input name="text" onChange={searchAndUpdate} value={text} className='search-input' autoFocus/> */}
        </form>
      </div>

      <div className="category-section">
        <h2 className='h1-animation'>Categoty</h2>
        <div className="category-map">
          {
            categoryData.map((currEle, index) => {
              return <button type='submit' key={index} name='category' value={currEle} onClick={searchAndUpdate} className={category === currEle ? "category-btn category-active" : "category-btn"}>{currEle}</button>
            })  
          }
        </div>
      </div>

      <div className="company-section">
        <h2 className="h1-animation">Company</h2>
        <form action="#">
        <select name="company" id="company" defaultValue={company} onChange={searchAndUpdate} className="sort-select">
          {
            companyData.map((currEle, index) => {
              return <option value={currEle} key={index} name="company">{currEle}</option>
            })
          }
        </select>
        </form>
      </div>

      <div className="color-section">
        <div>
          <h2 className="h1-animation">Company</h2>
        </div>
        <div className='color-section-inner'>
          {
            colorsData.map((currEle, index) => {
              return <button name="color" value={currEle} onClick={searchAndUpdate} key={index} className={color === currEle ? "div-color active" : "div-color"} style={{backgroundColor: `${currEle}`}} title={currEle}>
                {
                  currEle[0] === "#" ? color === currEle ? <VscCheckAll className='icon'/> : "" : `${currEle}`
                }
              </button>
            }) 
          }
          </div>
      </div>

      <div className="price-range">
        <h2 className="h1-animation">Price</h2>
        <p className="price">
          <IndPrice price={price}/>
        </p>
        <input className='input-range' name='price' type='range' max={maxPrice} min={minPrice} value={price} onChange={searchAndUpdate}/>
      </div>

      <div>
        <Btn className='btn' onClick={clearFilters}>clear filter</Btn>
      </div>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    gap: 40px;
    /* height: 100vh;  */
    width: 250px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0px 3px black;

    .search-input{
      width: 220px;
      border: 2px solid ${({theme}) => theme.colors.primary};
      outline: 1px solid ${({theme}) => theme.colors.primary};
      border-radius: 8px;
      color: ${({theme}) => theme.colors.primary};
      padding: 6px 8px;
      font-size: 20px;
    }

    .category-map{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      margin-top: 18px;
    }

    .category-btn{
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 18px;
      font-weight: 500;
      text-transform: capitalize;
      cursor: pointer;
    }

    .category-active{
      color: ${({theme}) => theme.colors.primary};
      font-weight: 600;
    }

    .sort-select{
      width: 150px;
      height: 30px;
      border: 2px solid ${({theme}) => theme.colors.primary};
      outline: none;
      font-size: 16px;
      font-weight: 800;
      margin-top: 15px;
      color: ${({theme}) => theme.colors.primary};

      option{
        font-weight: 600;
        color: ${({theme}) => theme.colors.primary};
      }
    }

    .color-section{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 15px;
    }

    .color-section-inner{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .div-color{
      height: 20px;
      width: 20px;
      border-radius: 50%;
      cursor: pointer;
      border: 0;
      outline: 0;
      font-weight: 700;
    }

    .active{
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 5px ${({theme}) => theme.colors.black};
      border: 2px dashed white;
      border-radius: 50%;
    }

    .icon{
      color: white;
      font-size: 20px;
      font-weight: 900;
   }

    .price{
      font-size: 18px;
      margin: 18px 0 5px;
    }

    .btn{
      background-color: #dc3545;
      border-color: #dc3545;
    }

    .btn:hover{
      color: #dc3545;
    }
  `

export default FilterSection
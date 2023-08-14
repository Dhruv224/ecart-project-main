import React, { useState } from 'react'
import { CgClose, CgMenu } from 'react-icons/cg'
import styled from 'styled-components'
import FilterSection from '../components/FilterSection'
import ProductPageList from '../components/ProductPageList'
import Sort from '../components/Sort'
import { useFilterContext } from '../context/filterContext'

function Products() {
  const {filterProduct} = useFilterContext();

  const [filters, setFilters] = useState(false);

  const Div = styled.div`
      .container{
        height: auto;
        margin: 3% 10%;
        display: flex;
        gap: 20px;
      }

      .filter-section{
        width: 25%;
        height: 100%;
      }

      .sort-product-section{
        width: 100%;
      }

      .sort-section{
        width: 100%;
        height: 30px;
      }

      .product-list-section{
        width: 100%;
        margin-top: 40px;
      }

      .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 5px black;
        padding: 8px 15px;
        border-radius: 4px;
        font-size: 20px;
        font-weight: 500;
        display: none;
      }

      .product-navbar-heading{
        display: none;
      }

      .mobile-nav-icon{
        display: none;
      }

      .close-outline{
        display: none;
      }

      @media (max-width: ${({theme}) => theme.media.mobile}){
        .container{
          flex-direction: column;
        }

        .flex{
          display: flex;
        }

        .filter-section{
          display: none;
        }

        .sort-section{
          display: none;
        }

        .active.filter-section{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          /* display: block; */
        }

        .active.sort-section{
          display: block;
        }

        .product-navbar-heading{
          display: block;
        }

        .mobile-nav-icon{
          display: block;
        }

        .close-outline{
          display: none;
        }

        .active .mobile-nav-icon{
          display: none;
        }
        .active .close-outline{
          display: block;
        }

        .product-list-section{
          margin-top: -100px;
          z-index: -1;
        }

        .active.product-list-section{
          margin-top: 0;
        }
      }
  `
  return (
    <Div>
      <div className="container">
        <div className={filters ? "active flex" : "flex"}>
          <p className='product-navbar-heading'>Filter Section</p>
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setFilters(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setFilters(false)}
          />
        </div>

        <div className={ filters ? "active filter-section" : "filter-section"}>
          <FilterSection />
        </div>

        <div className="sort-product-section">
          <div className={filters ? "active sort-section" : "sort-section"}>
            <Sort />
          </div>
          
          <div className={ filters ? "active product-list-section" : "product-list-section"}>
            <ProductPageList />
          </div>
        </div>
      </div>
    </Div>
  )
}

export default Products
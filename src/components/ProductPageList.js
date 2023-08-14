import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext'
import GridView from './GridView';
import ListView from './ListView';

function ProductPageList() {
  const {gridView, filterProduct} = useFilterContext();

  if(gridView === true){
    return(
        <GridView filterProduct={filterProduct}/>
    )
  }
  else{
    return(
      <ListView filterProduct={filterProduct}/>
    )
  }
}

export default ProductPageList
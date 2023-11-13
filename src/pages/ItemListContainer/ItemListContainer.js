
////////////////////////////////////////
//import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
//import { useParams } from 'react-router-dom';
import products from '../../components/Products.jsx/Products';
import './ItemListContainer.css'



const ItemListContainer = () => {

  return (
      <div>
          
          <ItemList products={products} />
          </div>
      );
  };

export default ItemListContainer;














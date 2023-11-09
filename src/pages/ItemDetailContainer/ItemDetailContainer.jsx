/* import { useEffect, useState} from 'react';
import{ useParams }  from 'react-router-dom'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import './style.css'


const ItemDetailContainer = () => {
  const [product, setProduct]= useState({});
  const{id} = useParams();
  
  const fethcProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>response.json())
    .then((data)=>setProduct(data))
    .then((error)=>console.log(error));
};

useEffect(()=>{
  fethcProduct();
}, []);

  return (
    <div>
      <ItemDetail itemSelected={product} />
    </div>
  )
}

export default ItemDetailContainer */

import { useEffect, useState} from 'react'
import{ useParams }  from 'react-router-dom'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getProductsById } from '../../asyncMock';
import './style.css'


const ItemDetailContainer = () => {
  const [product, setProduct]= useState(null);
  const{itemId} = useParams();
  


useEffect(()=>{
  getProductsById(itemId)
  .then(response => {
    setProduct(response)
  })
  .catch(error =>{
    console.log(error)
  })
}, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
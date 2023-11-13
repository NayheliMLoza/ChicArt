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
import './style.css'
import products from '../../components/Products.jsx/Products';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = () => {
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      if (selectedProduct) {
          setProduct(selectedProduct);
      }
  };

  useEffect(() => {
      fetchProduct();
  }, []);

  return (
      <div>
          <ItemDetail itemSelected={product} />
      </div>
  );
};

export default ItemDetailContainer
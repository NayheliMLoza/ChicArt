
import React from 'react';
import './ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = ({ itemSelected }) => {
  return (
    <div className='card-container'> 
      <h3 className='card-title'>{itemSelected?.title}</h3>
      <img src={itemSelected?.img} alt={itemSelected?.title} />
      <p>{itemSelected?.description}</p>
      <p>$:{itemSelected?.price}</p>
          <p>stock:{itemSelected?.stock}</p>
          <ItemCount />
    </div>
      
  );
};

export default ItemDetail;

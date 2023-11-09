/* import { Link, useParams } from 'react-router-dom';
import Item from '../Item/Item'
import ItemCount from '../itemCount/itemCount';
import { useEffect, useState } from 'react'; */
//import './ItemList.css'

// const ItemList = ({productList}) => {
//   return (
//     <div className='container-card'>
//         {productList.map((product) => (
//         <div className="card">
//           <Link to={'item/' + product.id}  key={product.id}>
//             <Item
//             title={product.title}
//             description={product.description}
//             price={product.price}
//             image={product.image} />
//         </Link>
//         <ItemCount />
//         </div>
        
//         ))}
        
//     </div>
//   );
// };

// export default ItemList




/* const ItemList =()=>{
  const [items, setItems] = useState([]);
  const { id } = useParams();
console.log(id)
  const fethcProducts =() => {
    fetch('https://fakestoreapi.com/products')
      .them((res) => res.json())
      .them((json)=> setItems(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fethcProducts();
  }, []);

  useEffect(() => {
    const filteredItems = items.filter((product) => {
      const category = product.category.includes('-')
       ? product.category.replace ('-', ' '): 
       product.category;
      return category ===id;
    } );
    setItems(filteredItems);
  }, [id ])

  return (
        <div className='container-card'>
             {items.map((item) => {
              return (
                <Link to={'/item/' + item.id} className="card"  key={item.id}>
                 <Item
                title={item.title}
                 description={item.description}
                 price={item.price}
                 image={item.image} />
             </Link>
              );
             <ItemCount />
            
             })}
            
         </div>
       );
}


 export default ItemList */
 


import'./ItemList.css'
import Item from '../Item/Item';

const ItemList = ({product}) =>{
  return(
    <div className='ListGroup'>
      {product.map (prod => <Item key={prod.id}{...prod} />)}
    </div>
  )
}

export default ItemList 
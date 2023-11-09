import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

//import './ItemListContainer.css'

/* const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])

   const fetchProduct =()=>{
       fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>setProductList(data))
        .then((error)=>console.log(error));
    };

    useEffect(()=>{
        fetchProduct();
    }, []);

    return (
        <div >
            <div className='title'>{greeting}</div>
            <ItemList productList={productList} />
           
        </div>
       
    )
};

export default ItemListContainer; */


const ItemListContainer = ({greeting})=>{
    const[products, setProducts] = useState([])

    const {categoryId} = useParams

    useEffect(()=> {
        /* onst asyncFunc = categoryId ? getProductsByCategory : getProducts */
        const asyncFunc = getProducts
        
       asyncFunc(categoryId)
       .then(response =>{
        setProducts(response)
       })
    .catch(error => {
        console.error(error)
    })
}, [categoryId]) 

return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products} />
    </div>
)
}

export default ItemListContainer;











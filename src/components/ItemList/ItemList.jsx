
import { Link, useParams } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';
import { useEffect, useState } from 'react';

const ItemList = ({products}) => {
    const { id } = useParams();
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (!id) {
            setFilteredItems(products);
        } else {
            const filtered = products.filter((product) => product.category === id);
            setFilteredItems(filtered);
        }
    }, [id]);

    return (
        <div className="item-list-container">
            {filteredItems.map((product) => (
            <Link to={"item/" + product.id} key={product.id} className='link'>
                <Item
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    img={product.img}
                />
            </Link>
            ))};
        </div>
    );
};

export default ItemList;

import './ItemDetail.css'

import ItemCount from '../itemCount/itemCount';

/* const ItemDetail = ({ itemSelected}) => {
  return (
    <div>
    <h6 className="card-title">{itemSelected?.title}</h6>
    <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
    <div className="card-description">
        <p>{itemSelected?.description}</p>
    </div>

<p>${itemSelected?.price}</p>
</div>
  )
};

export default ItemDetail */


const item = ({ id, title, description, price, image, stock}) => {
  return (
    <div className="card-container">
        <h4 className="card-title">{title}</h4>
        <img src={image} alt={title} width={70} />
        <p>{id}</p>
        <div className="card-description">
            <p>{description}</p>
        </div>
    
    <p>precio: ${price}</p>
    <p>Stock disponible: ${stock}</p>
    <button>Ver detalle</button>

      <div>
        <ItemCount initial ={1} stock={stock} onAdd={(quantity) =>console.log('cantidad agregada', )} />
      </div>
    </div>
  );
}

export default item
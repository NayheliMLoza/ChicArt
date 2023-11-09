

/* const item = ({ title, description, price, image, }) => {
  return (
    <div className="card-container">
        <h6 className="card-title">{title}</h6>
        <img src={image} alt={title} width={70} />
        <div className="card-description">
            <p>{description}</p>
        </div>
    
    <p>${price}</p>
    </div>
  );
}

export default item */
import {  Link } from 'react-router-dom'

const item = ({ id, title, description, price, image, stock, category}) => {
  return (
    <div className="card-container">
        <h4 className="card-title">{title}</h4>
        <img src={image} alt={title} width={70} />
        <div className="card-description">
            <p>{description}</p>
        </div>
    
    <p>precio: ${price}</p>
    <p>Stock disponible: ${stock}</p>
    <Link to={`/item/${id}`}>Ver Detalle</Link>
    </div>
  );
}

export default item
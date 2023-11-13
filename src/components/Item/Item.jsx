
import {  Link } from 'react-router-dom'
import './Item.css';


const item = ({ id, title, description, price, img, stock, category}) => {
  return (
    <div className="card-container">
        <h4 className="card-title">{title}</h4>
        <img src={img} alt={title}  />
        <div className="card-description">
            <p>{description}</p>
        </div>
    
    <p>precio:${price}</p>
    
    <div>
    
    <Link to={`/item/${id}`} >
      <button>Ver Detalle</button>
    </Link> 
    </div>
    </div>
  );
}

export default item
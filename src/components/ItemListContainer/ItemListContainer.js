import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <div className='title'>{greeting}</div>
            <div className='container-card'>
            <div className="card">
            <img src={'./img/art1.jpg'}alt="carrito de compras" width={'200px'} />
            <h3>Aretes</h3>
            <p>Aretes de estrella</p>
            <button className='card-button'>Agrecar al carrito</button>
            </div>
            <div className="card">
            <img src={'./img/art2.jpg'}alt="carrito de compras" width={'200px'} />
            <h3>Collar</h3>
            <p>Collar de estrella</p>
            <button className='card-button'>Agrecar al carrito</button>
            </div>
            <div className="card">
            <img src={'./img/art3.jpg'}alt="carrito de compras" width={'200px'} />
            <h3>Collar</h3>
            <p>Collar corazon</p>
            <button className='card-button'>Agrecar al carrito</button>
            </div>
            <div className="card">
            <img src={'./img/art4.jpg'}alt="carrito de compras" width={'200px'} />
            <h3>Dije</h3>
            <p>Dije esqueleto</p>
            <button className='card-button'>Agrecar al carrito</button>
            </div>
            </div>
        </div>
    )
};

export default ItemListContainer;
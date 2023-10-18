import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
      <div className="navbar-container">
        <div>
            <h1>ChicArt</h1>
        </div>
        <div>
            <ul className="list-container">
                <li>
                    <button className='button'>Collares</button>
                </li>
                <li>
                    <button className='button'>Pulceras</button>
                </li>
                <li>
                    <button className='button'>Aretes</button>
                </li>
            </ul>
        </div>
        <CartWidget/>
        </div>
        
    )
  }
  
  export default NavBar 
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
      <div className="navbar-container">
        <div>
        <Link to={'/'} className='logo' >ChicArt</Link>
        </div>
        <div className="list-container">
            
                
                    <NavLink to={"/category/pulceras"} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Pulceras</NavLink>
                
                    <NavLink to={"/category/anillos"}className='button'>Anillos</NavLink>
                
                    <NavLink to={"/category/collares"} className='button'>collares</NavLink>
                
                    <NavLink to={"/category/aretes"} className='button'>Aretes</NavLink>
               
        </div>
        <CartWidget/>
        </div>
        
    )
  }
  
  export default NavBar 
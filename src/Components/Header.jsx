import React from 'react'
import {Link} from 'react-router-dom' 

function Header() {
    return (
        <div className='nav'>
            <div className='logo'> Games4U </div>
            <ul>
                <Link  style={{color:'#fff',textDecoration:'none'}} to='/'><li>Home</li></Link>
               <Link style={{color:'#fff',textDecoration:'none'}} to='./Contact'> <li>Contact</li></Link>
               <Link style={{color:'#fff',textDecoration:'none'}} to='./Product'>  <li>Product</li></Link>
               <Link style={{color:'#fff',textDecoration:'none'}} to='./Services'><li>Services</li></Link>
               <Link style={{color:'#fff',textDecoration:'none'}} to='./Help'> <li>Help</li></Link>


            </ul>

            <div className='search'>
                <input type='text' />
                <div> &#9906; </div>
            </div>


        </div>
    )
}

export default Header

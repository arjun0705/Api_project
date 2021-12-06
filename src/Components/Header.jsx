import React from 'react'

function Header() {
    return (
        <div className='nav'>
            <div className='logo'> Games4U </div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Product</li>
                <li>Services</li>
                <li>Help</li>


            </ul>

            <div className='search'>
                <input type='text' />
                <div> &#9906; </div>
            </div>


        </div>
    )
}

export default Header

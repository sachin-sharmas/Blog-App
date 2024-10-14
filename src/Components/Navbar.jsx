import React from 'react'
import logo from "../mask.png"

const Navbar = () => {
  return (
    <nav>
        <div style={{display:"flex",justifyContent:"space-between",paddingTop:"20px"}}>
            <span><img width="48" height="48" src={logo} alt="deadpool" style={{margin:"10px"}} /></span>
            <div>
                <ul className='list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

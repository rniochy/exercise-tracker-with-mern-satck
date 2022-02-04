import React from 'react';
import './navibar.css'

const Navbar = () => {
    return (
        <div className='content_navbar'>
               <nav>
                   <h1 className='title_navbar'>Exercisetracker </h1>
                    <ul>
                         <li> Exercises</li>
                         <li> Create Exercise </li>   
                         <li>  Create User  </li>

                    </ul>
               </nav>
        </div>
    );
}

export default Navbar;

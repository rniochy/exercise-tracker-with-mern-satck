import React from 'react';
import { Link } from 'react-router-dom';

import './navibar.css'

const Navbar = () => {
    return (
        <div className='content_navbar'>
               <nav>
                        <h1><Link to='/' className='title_navbar'>Exercisetracker</Link></h1>
                    <ul>
                         <li><Link to='/' className='listStyle'>Exercises</Link></li>
                         <li> <Link to='createexercise' className='listStyle'>Create Exercise</Link></li>   
                         <li> <Link to='createuser' className='listStyle'>Create User</Link></li>
                    </ul>
               </nav>
        </div>
    );
}

export default Navbar;

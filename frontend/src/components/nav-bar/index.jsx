import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <header className="header">
        <nav className="nav">
            <ul>
                <li className='nav-left'>
                    <Link className='title' to="/">Todo App</Link>
                </li>
                
                <li className='nav-right'>
                    <Link id="nav-links" to="/">Simple Todo</Link>
                    <Link id="nav-links" to="/todo-planner">Todo Planner</Link>
                </li>
                
            </ul>
            
        </nav>
    </header>
    );
}

export default NavBar;

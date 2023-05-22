import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../image/logo.png';

const Siderbar = () => {
  return (
    <div>
      <aside className='navbar-aside' id='offcanvas_aside'>
        <div className='aside-top'>
            <Link to='/' className='brand-wrap'>
                <img src={logo} alt='logo' style={{ height: '46'}} className="logo" />
            </Link> 
            <div>
                <button className='btn btn-icon btn-aside-minimize'></button>
            </div>
        </div>

        <nav>
            <ul className='menu-aside'>
                <li className='menu-item'>
                    <NavLink activeClassName='active' className='menu-link' to='/' exact={true}>
                        <i class="fa-solid fa-house"></i>
                        <span className='text'>Dashboard</span>
                    </NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink activeClassName='active' className='menu-link' to='/category' exact={true}>
                        <i class="fa-solid fa-house"></i>
                        <span className='text'>Categores</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Siderbar

import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosClose, IoIosMenu } from 'react-icons/io';

const App = () => {
  // Default olaraq 'Home' aktiv olunur
  const [searchBox, setSearchBox] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('Home');

  const toggleSearchBox = () => {
    setSearchBox(!searchBox);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuItemClick = (item) => {
    setActiveNavLink(item);
  };

  return (
    <div>
      <div className='navbar-section mt-5'>
        <header>
          <nav>
            <i className='hamburger-menu' onClick={toggleMobileMenu}>
              {mobileMenu ? <IoIosClose /> : <IoIosMenu />}
            </i>
            <h3>Logo</h3>

            <ul className={`nav-link ${mobileMenu ? 'mobile-version openMenu' : 'mobile-version'}`}>
              <li
                className={`list-group-items ${activeNavLink === 'Home' ? 'active' : ''}`}
                onClick={() => handleMenuItemClick('Home')}
              >
                <a href="#">Home</a>
              </li>
              <li
                className={`list-group-items ${activeNavLink === 'Shop' ? 'active' : ''}`}
                onClick={() => handleMenuItemClick('Shop')}
              >
                <a href="#">Shop</a>
              </li>
              <li
                className={`list-group-items ${activeNavLink === 'Blog' ? 'active' : ''}`}
                onClick={() => handleMenuItemClick('Blog')}
              >
                <a href="#">Blog</a>
              </li>
              <li
                className={`list-group-items ${activeNavLink === 'Contact' ? 'active' : ''}`}
                onClick={() => handleMenuItemClick('Contact')}
              >
                <a href="#">Contact</a>
              </li>
            </ul>

            <i onClick={toggleSearchBox}>
              {searchBox ? <IoIosClose className='search-close-button' /> :
                <CiSearch className='search-open-button' />}
            </i>

            <div className={`search-div ${searchBox ? 'active' : ''}`}>
              <form>
                <input type="text" className='search-input' />
              </form>
            </div>
          </nav>

        </header>
      </div>
    </div >
  );
};

export default App;

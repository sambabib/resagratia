import { useState } from 'react';
import { Link } from 'react-router-dom';

// @assets
import Logo from '../../assets/logo.svg';

// @icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// @styling
import './mobilenavbar.scss';

const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false);
  };

  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
  };

  return (
    <div className='mobile__navbar'>
      <div className='mobile__navbar__container'>
        <div className='mobile__navbar__logo'>
          <img src={Logo} alt='mobile logo' />
        </div>
        <div className='mobile__navbar__icon'>
          <SearchRoundedIcon
            className='mobile__search__icon'
            onClick={handleSearchOpen}
          />
          <MenuRoundedIcon
            className='mobile__menu__icon'
            onClick={handleMenuOpen}
          />
        </div>
      </div>

      {/* show navbar elements */}
      {searchOpen ? (
        <div className='mobile__navbar__elements'>
          <div className='navbar__element__logo__container'>
            <div className='navbar__element__logo'>
              <img src={Logo} alt='mobile logo' />
            </div>
            <CloseRoundedIcon
              className='close__icon'
              onClick={() => setSearchOpen(false)}
            />
          </div>

          {/* search element in menu */}
          <div className='search__element'>
            <SearchRoundedIcon className='mobile__search__icon element__icon' />
            <label htmlFor='search' />
            <input
              type='text'
              id='search'
              name='search'
              autoComplete='off'
              placeholder='Search for courses'
            />
          </div>
        </div>
      ) : null}

      {menuOpen ? (
        <div className='mobile__navbar__elements'>
          <div className='navbar__element__logo__container'>
            <div className='navbar__element__logo'>
              <img src={Logo} alt='mobile logo' />
            </div>
            <CloseRoundedIcon
              className='close__icon'
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* sign in button */}
          <div className='mobile__signin__button'>
            <Link to='signin' onClick={() => setMenuOpen(false)}>
              <p>Sign in</p>
            </Link>
          </div>

          {/* menu items */}
          <div className='menu__elements'>
            <div className='menu__element__container'>
              <div className='menu__element__item'>
                <p>Learn</p>
                <ul className='mobile__submenu'>
                  <li>Power BI</li>
                  <li>Tableau</li>
                  <li>SQL</li>
                  <li>Microsoft Excel</li>
                  <li>Book Personalized Training Session</li>
                </ul>
              </div>

              <div className='menu__element__item'>
                <p>Product</p>
                <ul className='mobile__submenu'>
                  <li>Cost of Electricity in Nigeria</li>
                  <li>Fuel Prices in Nigeria</li>
                  <li>Financial Performance of Banks in Nigeria</li>
                </ul>
              </div>

              <div className='menu__element__item'>
                <p>Research</p>
                <ul className='mobile__submenu'>
                  <li>Datasets</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>

          {/* get started button */}
          <div className='mobile__getstarted__button'>
            <Link to='signup' onClick={() => setMenuOpen(false)}>
              <p>Get started</p>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNavBar;

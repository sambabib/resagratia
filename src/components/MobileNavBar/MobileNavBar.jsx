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

const learnMenu = [
  {
    id: 1,
    title: 'Power BI',
    link: '/learn/excel',
  },
  {
    id: 2,
    title: 'Tableau',
    link: '/learn/excel',
  },
  {
    id: 3,
    title: 'SQL',
    link: '/learn/excel',
  },
  {
    id: 4,
    title: 'Microsoft Excel',
    link: '/learn/excel',
  },
  {
    id: 5,
    title: 'Book Personalized Training Session',
    link: '/learn/excel',
  },
];

const productsMenu = [
  {
    id: 1,
    title: 'Cost of Electricity in Nigeria',
    link: '/products/fuel-prices-in-nigeria',
  },
  {
    id: 2,
    title: 'Fuel Prices in Nigeria',
    link: '/products/fuel-prices-in-nigeria',
  },
  {
    id: 3,
    title: 'Financial Perfomance of Banks in Nigeria',
    link: '/products/fuel-prices-in-nigeria',
  },
];

const researchMenu = [
  {
    id: 1,
    title: 'Datasets',
    link: '/products/fuel-prices-in-nigeria',
  },
  {
    id: 2,
    title: 'Blog',
    link: '/products/fuel-prices-in-nigeria',
  },
];

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
          <Link to='/'>
            <img src={Logo} alt='mobile logo' />
          </Link>
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
        <div className='mobile__search__element'>
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

           {/* get started button */}
           <div className='mobile__getstarted__button'>
            <Link to='signup' onClick={() => setMenuOpen(false)}>
              <p>Get started</p>
            </Link>
          </div>

          {/* menu items */}
          <div className='menu__elements'>
            <div className='menu__element__container'>
              <div className='menu__element__item'>
                <p>Learn</p>
                <ul className='mobile__submenu'>
                  {learnMenu.map((item) => (
                    <Link to={item.link} key={item.id} onClick={() => setMenuOpen(false)}>
                      <li>{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>

              <div className='menu__element__item'>
                <p>Product</p>
                <ul className='mobile__submenu'>
                  {productsMenu.map((item) => (
                    <Link to={item.link} key={item.id} onClick={() => setMenuOpen(false)}>
                      <li>{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>

              <div className='menu__element__item'>
                <p>Research</p>
                <ul className='mobile__submenu'>
                  {researchMenu.map((item) => (
                    <Link to={item.link} key={item.id} onClick={() => setMenuOpen(false)}>
                      <li>{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNavBar;

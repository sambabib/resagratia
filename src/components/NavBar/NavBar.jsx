import { useState, useEffect } from 'react';
import { resizeWidth } from '../../redux/reducers/windowDimensionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// @components
import MobileNavBar from '../MobileNavBar/MobileNavBar';

// @assets
import resaLogo from '../../assets/logo.svg';

// @styling
import './navbar.scss';

// @icons
import { SearchRounded } from '@mui/icons-material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const NavBar = () => {
  const [state, setState] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
  });

  const newWidth = useSelector((state) => state.windowDimension.width);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleWindowResize = () => {
      const resize = dispatch(resizeWidth({ width: window.innerWidth }));
      console.log(resize);

      newWidth >= 2000 ? console.log('big width') : console.log('small width');
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [dispatch, newWidth]);

  return (
    <>
      {newWidth <= 980 ? (
        <MobileNavBar />
      ) : (
        <div className='navbar'>
          <div className='navbar__items'>
            <div
              className='navbar__menu__container'
              onMouseLeave={() =>
                setState({
                  menu1: false,
                  menu2: false,
                  menu3: false,
                })
              }
            >
              <div className='navbar__logo'>
                <Link to='/'>
                  <img src={resaLogo} alt='resagratia logo' />
                </Link>
              </div>

              {/* navbar menu */}
              <div className='navbar__menu'>
                <div
                  className={`${state.menu1 ? 'active' : 'navbar__menu__item'}`}
                  onMouseEnter={() => setState({ menu1: true })}
                >
                  <p>Learn</p>
                  <ArrowDropDownRoundedIcon
                    className={`${
                      state.menu1 ? 'active__arrow' : 'arrow__icon'
                    }`}
                  />
                  {state.menu1 ? (
                    <div
                      className='navbar__submenu learn'
                      onMouseLeave={() => setState({ menu1: false })}
                    >
                      <p>Power BI</p>
                      <p>Tableau</p>
                      <p>SQL</p>
                      <Link to='/learn/excel'>
                        <p>Microsoft Excel</p>
                      </Link>
                      <p>Book Personalized Training Session</p>
                    </div>
                  ) : null}
                </div>
                <div
                  className={`${state.menu2 ? 'active' : 'navbar__menu__item'}`}
                  onMouseEnter={() => setState({ menu2: true })}
                >
                  <p>Products</p>
                  <ArrowDropDownRoundedIcon
                    className={`${
                      state.menu2 ? 'active__arrow' : 'arrow__icon'
                    }`}
                  />
                  {state.menu2 ? (
                    <div
                      className='navbar__submenu products'
                      onMouseLeave={() => setState({ menu2: false })}
                    >
                      <p>Cost of Electricity in Nigeria</p>
                      <Link to='/products/fuel-prices-in-nigeria'>
                        <p>Fuel Prices in Nigeria</p>
                      </Link>
                      <p>Financial Performance of Banks in Nigeria</p>
                    </div>
                  ) : null}
                </div>
                <div
                  className={`${state.menu3 ? 'active' : 'navbar__menu__item'}`}
                  onMouseEnter={() => setState({ menu3: true })}
                >
                  <p>Resources</p>
                  <ArrowDropDownRoundedIcon
                    className={`${
                      state.menu3 ? 'active__arrow' : 'arrow__icon'
                    }`}
                  />
                  {state.menu3 ? (
                    <div
                      className='navbar__submenu resources'
                      onMouseLeave={() => setState({ menu3: false })}
                    >
                      <Link to='/resources/datasets'>
                        <p>Datasets</p>
                      </Link>
                      <p>Blog</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* user sign up && sign in */}
            <div className='navbar__actions'>
              <div className='navbar__search'>
                <SearchRounded className='search__icon' />
                <label htmlFor='search' />
                <input
                  type='text'
                  id='search'
                  name='search'
                  autoComplete='off'
                  placeholder='Search for courses'
                />
              </div>

              <div className='navbar__auth'>
                <Link to='signin'>
                  <div className='navbar__signin__button'>
                    <p>Sign in</p>
                  </div>
                </Link>

                <Link to='signup'>
                  <div className='navbar__getstarted__button'>
                    <p>Get Started</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

import { useState, useEffect } from 'react';
import { resizeWidth } from '../../redux/reducers/windowDimensionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// @components
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import UserAuthMenu from '../../utils/UserAuthMenu/UserAuthMenu';

// @assets
import resaLogo from '../../assets/logo.svg';

// @styling
import './authnavbar.scss';

// @icons
import { SearchRounded } from '@mui/icons-material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const AuthNavBar = () => {
  const [state, setState] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
  });

  const [showAuth, setShowAuth] = useState(false);

  const { logout, currentUser } = useAuth();

  const newWidth = useSelector((state) => state.windowDimension.width);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      logout();
      navigate('/signin');
    } catch (err) {
      console.error(err);
    }
  };

  const handleMenuLeave = () => {
    setState({
      menu1: false,
      menu2: false,
      menu3: false,
    });
  };

  const handleAuthLeave = () => {
    setShowAuth(false);
  };

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
              onMouseLeave={handleMenuLeave}
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

              <div
                className='navbar__auth__user'
                onMouseLeave={handleAuthLeave}
              >
                <div className='navbar__auth__user__container'>
                  <AccountCircleRoundedIcon className='account__icon' />
                  <p>{currentUser?.displayName}</p>
                </div>
                <div
                  className='navbar__auth__arrow__icon'
                  onMouseEnter={() => setShowAuth(true)}
                >
                  <ArrowDropDownRoundedIcon className='arrow__icon' />
                  {showAuth && (
                    <UserAuthMenu
                      showAuth={showAuth}
                      setShowAuth={setShowAuth}
                      handleLogout={handleLogout}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthNavBar;

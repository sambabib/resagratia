// @ assets
import LinkedIn from '../../assets/linkedin.png';
import Twitter from "../../assets/twitter.png";

// @icons
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

// @styling
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__top'>
          <div className='footer__top__item'>
            <div className='footer__heading'>
              <h3>Courses</h3>
            </div>
            <div className='footer__paragraph'>
              <ul className='footer__paragraph__container'>
                <li>Microsoft Excel</li>
                <li>Power BI</li>
                <li>SQL</li>
                <li>Tableau</li>
              </ul>
            </div>
          </div>

          <div className='footer__top__item'>
            <div className='footer__heading'>
              <h3>Products</h3>
            </div>
            <div className='footer__paragraph'>
              <ul className='footer__paragraph__container'>
                <li>Fuel Prices Tracker</li>
                <li>Cost of Electricity</li>
                <li>Financial Performance of Banks in Nigeria</li>
              </ul>
            </div>
          </div>

          <div className='footer__top__item'>
            <div className='footer__heading'>
              <h3>More</h3>
            </div>
            <div className='footer__paragraph'>
              <ul className='footer__paragraph__container'>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Jobs at Resa</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='footer__social'>
            <h3>Get Social</h3>
            <div className='footer__icons'>
              <div className='footer__social__icon'>
                <a href='https://www.linkedin.com/company/resagratia'>
                  <img
                    src={LinkedIn}
                    alt='icons made by pixel perfect on flaticons'
                  />
                </a>
              </div>

              <div className='footer__social__icon'>
                <a href='https://twitter.com/ResaData?s=20'>
                  <img
                    src={Twitter}
                    alt='icons made by freepik on flaticons'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__copyright'>
            <div className="footer__copyright__container">
                <CopyrightRoundedIcon className='copyright__icon' />
                <p><span>{new Date().getFullYear()}</span>Resagratia. All Rights Reserved</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

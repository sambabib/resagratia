// @components
import FuelPricesTableau from '../../../dashboards/FuelPricesTableau';

// @icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

// @assets
import Electricity from '../../../assets/electricity-cables.jpg';
import Banks from '../../../assets/dollar-bills.jpg';

// @styling
import './fuelpricesdashboard.scss';

const FuelPricesDashboard = () => {
  return (
    <div className='fuelprices'>
      <div className='fuelprices__container'>
        <div className='fuelprices__intro__container'>
          <div className='fuelprices__heading'>
            <h3>Fuel Prices in Nigeria</h3>
          </div>
          <div className='fuelprices__intro__text'>
            <p>
              The price of diesel in Nigeria is 289.4 naira per litre. This
              represents a 28.4% increase in diesel price per litre since
              January 2021. The price of petrol is more stable at 165.8 naira
              per litre while there has been a significant increase in the price
              of kerosene in Nigeria to 441.1 naira per litre.
            </p>
          </div>
        </div>

        {/* tableau dashboard */}
        <div className='tableau__dashboard'>
          <div className='tableau__dashboard__container'>
            <FuelPricesTableau />
          </div>
        </div>

        {/* body text */}
        <div className='fuelprices__bodytext'>
          <div className='fuelprices__bodytext__container'>
            <div className='fuelprices__bodytext__content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sapiente deserunt consequatur dolor. Quibusdam itaque rem illum
                perferendis aliquid delectus adipisci eveniet sit accusantium
                similique, natus dignissimos tenetur harum. Aperiam. ipsum dolor
                sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>

        {/* gain access cta */}
        <div className='gainaccess'>
          <div className='gainaccess__container'>
            <div className='gainaccess__content'>
              <div className='gainaccess__heading'>
                <h3>Learn more</h3>
              </div>
              <div className='gainaccess__text'>
                <h3>Gain access to premium analytics and dashboards</h3>
              </div>
              <div className='gainaccess__button'>
                <p>Get started</p>
              </div>
            </div>
          </div>
        </div>

        {/* explore other dashboards */}
        <div className='other__dashboards'>
          <div className='other__dashboards__container'>
            <div className='other__dashboards__content'>
              <div className='other__dashboards__heading'>
                <h3>Explore other dashboards</h3>
              </div>
              <div className='other__dashboards__subheading'>
                <h3>Discover other dashboards that may interest you</h3>
              </div>

              <div className='other__dashboards__dashboard'>
                <div className='other__dashboards__item'>
                  <div className='other__dashboards__item__img'>
                    <img src={Electricity} alt='electricity cables' />
                  </div>
                  <div className='other__dashboards__item__tag free'>
                    <p>Free</p>
                  </div>
                  <div className='other__dashboards__item__description'>
                    <h3 className='other__dashboards__item__title'>
                      Cost of Electricity in Nigeria
                    </h3>
                    <div className='view__other__dashboards__course'>
                      <p>View Product</p>
                      <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                    </div>
                  </div>
                </div>

                <div className='other__dashboards__item'>
                  <div className='other__dashboards__item__img'>
                    <img src={Banks} alt='by David McBee from Pexels' />
                  </div>
                  <div className='other__dashboards__item__tag paid'>
                    <p>Paid</p>
                  </div>
                  <div className='other__dashboards__item__description'>
                    <h3 className='other__dashboards__item__title'>
                      Financial Performance of Banks in Nigeria
                    </h3>
                    <div className='view__other__dashboards__course'>
                      <p>View Product</p>
                      <ArrowForwardIosRoundedIcon className='arrow__forward__icon' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelPricesDashboard;

// @components
import FuelPricesTableau from '../../../utils/dashboards/FuelPricesTableau';

// @icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

// @assets
import Electricity from '../../../assets/electricity-cables.jpg';
import Banks from '../../../assets/dollar-bills.jpg';
import Fuel from '../../../assets/petrol-hands.jpg';

// @styling
import './fuelpricesdashboard.scss';

const FuelPricesDashboard = () => {
  return (
    <div className='fuelprices'>
      <div className='fuelprices__container'>
        <div className='fuelprices__intro__container'>
          <div className='fuelprices__header__img'>
            <img src={Fuel} alt='' />
          </div>
          <div className='fuelprices__heading'>
            <h3>Fuel Prices in Nigeria</h3>
          </div>
          <div className='fuelprices__intro__text'>
            <p>
              The price of diesel in Nigeria is now 289.4 naira per litre. This
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
                Over the last few decades, fluctuations have existed in prices
                of fuel in Nigeria but has averaged at a price of 0.43 USD per
                litre from 1991 until 2021, with its highest ever being 0.73 USD
                per litre in May, 2016 and its lowest ever being 0.02 USD per
                litre in December, 1992. Nigeria is one of the countries where
                the prices of its domestic oils has been on the increase since
                1970. Incessant increase in the price of crude oil has led to
                multiple negative effects on the economy from increase in the
                cost of living, to increase in the cost of production as well as
                transportation and inflation rate.
              </p>
              <p>
                Currently, fuel pump prices in Nigeria stand at: <br />{' '}
                Gasoline/petrol price: N165.8/litre <br /> Diesel price:
                N289.4/litre <br /> Kerosene price: N468.0 <br /> Findings show that
                these prices place Nigeria as the seventh cheapest nation in
                terms of fuel pump price and the lowest in West Africa.
              </p>
              <p>
                Unlike most products, oil prices are not determined entirely by
                supply, demand, and market sentiment toward the physical
                product. Rather, supply, demand, and sentiment toward oil future
                contracts, which are traded heavily by speculators, play a
                dominant role in price determination. A change in fuel price has
                a great effect on the GDP (gross domestic product) of the
                country, paying high prices for petrol and using less of it will
                affect the demand for goods and services. Nigeria is known more
                as a consuming nation than a producing nation. The production
                industries In Nigeria face a daunting challenge to stay in
                business due to the high cost of production.
              </p>
              <p>
                The effects on demand, however, have a great potential impact on
                GDP in the short run. In a perfect world, using less energy has
                only a small direct effect on production because, of all the
                inputs to production (labor, equipment, energy, and other raw
                materials), energy costs account for a relatively small share of
                output, but In the case of Nigeria, energy is a major share of
                output, as organizations have to provide for their own power
                in-house, with the use of alternative power supply, such as
                generators and are exposed to the market as it relates to energy
                prices with the subsidy gone. The effects on demand and the
                consequent indirect effects on production—could be a much bigger
                problem, since spending more on petroleum imports and the
                nation’s poor power sector will generally reduce spending on
                goods and services in Nigeria while it will increase prices on
                virtually every good and service.
              </p>
              <p>
                Finally, with government plans to deregulate fuel prices and{' '}
                <span>
                  <a
                    href='https://dailytrust.com/fuel-price-may-rise-in-weeks-as-nec-recommends-n302-per-litre'
                    target='__blank'
                  >
                    remove fuel subsidy
                  </a>
                </span>
                , the price of diesel, which has already been trending upwards
                since Q2 2020, may further increase.
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
                  <div className='other__dashboards__item__tag premium'>
                    <p>Premium</p>
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

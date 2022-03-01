import './index.scss';

const FuelPricesTableau = () => {
  return (
    <div className="frame__container">
      <iframe
        frameBorder='0'
        title='tableau viz'
        height='500'
        width='auto'
        scrolling='no'
        src='https://public.tableau.com/views/FuelPricesApp/FuelPrices?:embed=yes&:showVizHome=no'
      ></iframe>
    </div>
  );
};

export default FuelPricesTableau;

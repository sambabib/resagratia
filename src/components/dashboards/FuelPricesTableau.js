import { useEffect, useRef } from 'react';

const { tableau } = window;

const FuelPricesTableau = () => {
  const ref = useRef(null);

  useEffect(() => {
    const url =
      'https://public.tableau.com/views/FuelPricesApp/FuelPrices';

    const options = {
      showShareOptions: false,
      hideToolBar: true,
    };
    const initViz = () => {
      new tableau.Viz(ref.current, url, options);
    };
    initViz();
  }, []);

  return (
    <div
      ref={ref}
      style={{ width: '420px', height: '527px', margin: '0 auto' }}
    ></div>
  );
};

export default FuelPricesTableau;

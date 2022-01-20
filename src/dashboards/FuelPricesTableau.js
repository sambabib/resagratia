import { useEffect, useRef } from 'react';

const { tableau } = window;

const FuelPricesTableau = () => {
  const ref = useRef(null);

  const url =
    'https://public.tableau.com/views/FuelPricesApp/FuelPrices?:language=en-US&:display_count=n&:origin=viz_share_link';

  const initViz = () => {
    new tableau.Viz(ref.current, url);
  };

  useEffect(() => {
    initViz();
  }, []);

  return <div ref={ref} style={{ width: '420px', height: '527px', margin: '0 auto' }}></div>;
};

export default FuelPricesTableau;

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const { tableau } = window;

const FuelPricesTableau = () => {
  const ref = useRef(null);

  const dashboardWidth = useSelector((state) => state.windowDimension.width);

  useEffect(() => {
    const url = 'https://public.tableau.com/views/FuelPricesApp/FuelPrices';

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
      // style={
      //   dashboardWidth <= 420
      //     ? { width: '320px' }
      //     : { width: '390px' }
      // }
    ></div>
  );
};

export default FuelPricesTableau;

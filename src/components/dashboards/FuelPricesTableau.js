import { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';

const { tableau } = window;

const FuelPricesTableau = () => {
  const ref = useRef(null);

  // const dashboardWidth = useSelector((state) => state.windowDimension.width);

  useEffect(() => {
    const url = 'https://public.tableau.com/views/FuelPricesApp/FuelPrices';

    const options = {
      hideToolbar: true,
      hideShareOptions: true,
    };

    const initViz = () => {
      new tableau.Viz(ref.current, url, options);
    };

    initViz();
  }, []);

  return (
    <div
      ref={ref}
      // style={dashboardWidth > 768 ? { width: '100vw'} : {} }
    ></div>
  );
};

export default FuelPricesTableau;

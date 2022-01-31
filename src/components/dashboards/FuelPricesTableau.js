import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const { tableau } = window;

const FuelPricesTableau = () => {
  // const ref = useRef(null);

  // const dashboardWidth = useSelector((state) => state.windowDimension.width);

  useEffect(() => {
    // const url = 'https://public.tableau.com/views/FuelPricesApp/FuelPrices';

    // const share = document.getElementsByClassName('.tabToolbarButtonImg.tab-icon-share');
    // share[0].parentNode.removeChild(share[0]);
    // share[0].remove();

    // const options = {
    //   showShareOptions: false,
    //   hideToolBar: true,
    // };

    // const initViz = () => {
    //   new tableau.Viz(ref.current, url, options);
    // };

    // initViz();
    var divElement = document.getElementById('viz1642524027290');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '420px';
    vizElement.style.height = '527px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    // <div
    //   ref={ref}
    //   // style={dashboardWidth > 768 ? { width: '100vw'} : {} }
    // ></div>
    <div
      className='tableauPlaceholder'
      id='viz1642524027290'
      style={{ position: 'relative' }}
    >
      <object className='tableauViz' style={{ display: 'block' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='FuelPricesApp&#47;FuelPrices' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='no' />
        <param name='showShareOptions' value='false' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
};

export default FuelPricesTableau;

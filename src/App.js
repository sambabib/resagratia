import { Routes, Route, useLocation } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomeContent from './components/HomeContent/HomeContent';

// screens
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Excel from './screens/Learn/Excel/Excel';
import FuelPricesDashboard from './screens/Products/FuelPricesDashboard/FuelPricesDashboard';

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/signin' || location.pathname === '/signup'  ? null : (<NavBar />)}
      <Routes>
        <Route path='/' element={<HomeContent />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='/learn/excel' element={<Excel />} />
        <Route path='/products/fuel_prices_in_nigeria' element={<FuelPricesDashboard />} />
      </Routes>
      {location.pathname === '/signin' || location.pathname === '/signup'  ? null : (<Footer />)}
    </>
  );
};

export default App;

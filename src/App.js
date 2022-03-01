import { Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomeContent from './components/HomeContent/HomeContent';
import DatasetsItem from './components/DatasetsItem/DatasetsItem';
import AuthNavBar from './components/AuthNavBar/AuthNavBar';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';

// screens
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Excel from './screens/Learn/Excel/Excel';
import FuelPricesDashboard from './screens/Products/FuelPricesDashboard/FuelPricesDashboard';
import Datasets from './screens/Resources/Datasets/Datasets';
import UserSignupDetails from './screens/UserSignupDetails/UserSignupDetails';
import WelcomeDashboard from './screens/WelcomeDashboard/WelcomeDashboard';

const App = () => {
  const location = useLocation();

  const { currentUser } = useAuth();

  return (
    <>
      {location.pathname === '/signin' ||
      location.pathname === '/signup' ? null : location.pathname ===
        '/user-details' ? (
        <NavBar />
      ) : currentUser ? (
        <AuthNavBar />
      ) : (
        <NavBar />
      )}
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='learn/excel' element={<Excel />} />
          <Route
            path='products/fuel-prices-in-nigeria'
            element={<FuelPricesDashboard />}
          />
          <Route path='resources/datasets' element={<Datasets />} />
          <Route path='resources/datasets/:id' element={<DatasetsItem />} />
          <Route path='user-details' element={<UserSignupDetails />} />
          <Route path='dashboard' element={<WelcomeDashboard />} />
        </Routes>
      </ScrollToTop>
      {location.pathname === '/signin' ||
      location.pathname === '/signup' ? null : (
        <Footer />
      )}
    </>
  );
};

export default App;

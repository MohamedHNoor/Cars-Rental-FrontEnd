import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/homepage';
import CarHistory from './components/CarHistory/CarHistory';
import Reservationpage from './pages/reservationpage';
import Detailspage from './pages/detailspage';
import Reservations from './components/Reservations/Reservations';
import MyReservations from './components/Reservations/MyReservations';
import './App.css';
import Reservationshistory from './pages/reservationshistory';
import LoginPage from './pages/LoginPage';
import Error from './pages/Error';
import ProtectedRoute from './pages/ProtectedRoute';
import { fetchCars } from './redux/slices/carSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookride"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addItem"
            element={
              <ProtectedRoute>
                <Reservationpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/deleteItem"
            element={
              <ProtectedRoute>
                <Reservationshistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailsPage/:id"
            element={
              <ProtectedRoute>
                <Detailspage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/myreservations"
            element={
              <ProtectedRoute>
                <MyReservations />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<LoginPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </div>
  );
};

export default App;

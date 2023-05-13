import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import frtchCars from './components/';
import Homepage from './pages/homepage';
import CarHistory from './components/CarHistory/CarHistory';
import Reservationpage from './pages/reservationpage';
import Detailspage from './pages/detailspage';
import Appointments from './components/Reservations/Reservations';
import AddReservations from './components/Reservations/AddReservations';
import MyReservations from './components/Reservations/MyReservations';
import './App.css';
import Reservationshistory from './pages/reservationshistory';
import LoginPage from './pages/LoginPage';
import Error from './pages/Error';
import ProtectedRoute from './pages/ProtectedRoute';
import { fetchCars } from './redux/slices/carSlice';

function App() {
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
          <Route path="/bookride" element={<Appointments />} />
          <Route path="/addItem" element={<Reservationpage />} />
          <Route path="/deleteItem" element={<Reservationshistory />} />
          <Route path="/detailsPage/:id" element={<Detailspage />} />
          <Route path="/reservations/add" element={<AddReservations />} />
          <Route path="/myreservations" element={<MyReservations />} />
          <Route path="/register" element={<LoginPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import LifeStyle from "./pages/lifestyle";
import CarHistory from "./components/CarHistory/CarHistory";
import Reservationpage from "./pages/reservationpage";
import Detailspage from "./pages/detailspage";
import Appointments from "./components/Reservations/Reservations";
import AddReservations from "./components/Reservations/AddReservations";
import MyReservations from "./components/Reservations/MyReservations";
import "./App.css";
import Reservationshistory from "./pages/reservationshistory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/lifestyle" element={<LifeStyle />} /> */}
        <Route path="/bookride" element={<Appointments />} />
        <Route path="/addItem" element={<Reservationpage />} />
        <Route path="/deleteItem" element={<Reservationshistory />} />
        <Route path="/detailsPage/:id" element={<Detailspage />} />
        <Route path="/reservations/add" element={<AddReservations />} />
        <Route path="/myreservations" element={<MyReservations />} />


      </Routes>
    </div>
  );
}

export default App;

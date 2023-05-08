import './App.css';
import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import LifeStyle from "./pages/lifestyle";
import { useLocation } from "react-router-dom";
import BookingForm from "./components/BookingForm/BookingForm";
import CarHistory from "./components/CarHistory/CarHistory";
function App() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage />}      />
      <Route path='/lifestyle' element={<LifeStyle />}      />
      <Route path='/bookride' element={<LifeStyle />}      />
      <Route path='/addItem' element={<BookingForm />}      />
      <Route path='/deleteItem' element={<CarHistory />}      />
    </Routes>
    </div>
  );
}

export default App;

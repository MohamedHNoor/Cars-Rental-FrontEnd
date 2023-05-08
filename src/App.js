import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import LifeStyle from "./pages/lifestyle";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage />}      />
      <Route path='/lifestyle' element={<LifeStyle />}      />
    </Routes>
    </div>
  );
}

export default App;

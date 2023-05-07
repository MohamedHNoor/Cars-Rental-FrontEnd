import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import LifeStyle from "./pages/lifestyle";
function App() {
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

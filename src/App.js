import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Slider from "./components/Slider";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Slider />}      />
    </Routes>
    </div>
  );
}

export default App;

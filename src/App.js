import logo from './logo.svg';
import './App.css';

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

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import { FirstYearSem } from './components/SelectSem/1stYear';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/first-year" element={ <FirstYearSem/>} />
          <Route path="/second-year" element={<FirstYearSem/>} />
          <Route path="/third-year" element={<FirstYearSem/>} />
          <Route path="/fourth-year" element={<FirstYearSem/>} />
        </Routes>
    </Router>
    </div>
   
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import { FirstYearSem, FourthYearSem, SecondYearSem, ThirdYearSem } from './components/SelectSem/1stYear';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/first-year" element={ <FirstYearSem/>} />
          <Route path="/second-year" element={<SecondYearSem/>} />
          <Route path="/third-year" element={<ThirdYearSem/>} />
          <Route path="/fourth-year" element={<FourthYearSem/>} />
        </Routes>
    </Router>
    </div>
   
  );
}

export default App;

import './App.css';
import { Ex1, Ex2,Ex3,Ex4, Excercise } from './Exercise/Excercise';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import { SelectYear, Sem } from './components/ComponentItem';

function App() {
  return (
    <div>
      <SelectYear/>,
      <Sem/>
      {/* <Router>
     
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<Ex1 />} />
          <Route path="/ex2" element={<Ex2 />} />
          <Route path="/ex3" element={<Ex3 />} />
          <Route path="/ex4" element={<Ex4 />} />
        </Routes>
    </Router> */}
    </div>
   
  );
}

export default App;

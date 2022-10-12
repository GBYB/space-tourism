import './App.css';
import { Commander, Engineer, Europa, Home, Mars, Moon, Pilot, Specialist, Vehicle, Titan, Capsule, Port } from './containers/container';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" index element={<Home />} />

        <Route exact path="/moon" element={<Moon />} />
        <Route exact path="/mars" element={<Mars />} />
        <Route exact path="/europa" element={<Europa />} />
        <Route exact path="/titan" element={<Titan />} />

        <Route exact path="/commander" element={<Commander />} />
        <Route exact path="/specialist" element={<Specialist />} />
        <Route exact path="/pilot" element={<Pilot />} />
        <Route exact path="/engineer" element={<Engineer />} />


        <Route exact path="/vehicle" element={<Vehicle />} />
        <Route exact path="/port" element={<Port />} />
        <Route exact path="/capsule" element={<Capsule />} />

      </Routes>
    </Router>
  );
}

export default App;

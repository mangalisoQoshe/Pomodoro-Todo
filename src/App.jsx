import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component import
import Navigation from "./components/Navigation";
import Pomodoro from "./components/Pomodoro";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Pomodoro />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

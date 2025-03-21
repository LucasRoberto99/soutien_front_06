import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <h1>SOUTIEN 06</h1>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signup />} />
      </Routes>
      <footer>salut</footer>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Calendar from "./pages/Calendar.jsx"; // Import the new Calendar page
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/calendar" element={<Calendar />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;

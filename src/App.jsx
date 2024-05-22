import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Calendar from "./pages/Calendar.jsx"; // Import the new Calendar page
import About from "./pages/About.jsx"; // Import the new About page
import Contact from "./pages/Contact.jsx"; // Import the new Contact page
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/calendar" element={<Calendar />} /> {/* Add the new route */}
        <Route path="/about" element={<About />} /> {/* Add the new route */}
        <Route path="/contact" element={<Contact />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;

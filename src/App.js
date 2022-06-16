import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import TnC from "./Pages/TnC";
import NotFound from "./Pages/NotFound";
import Singin from "./Pages/Singin";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/terms-and-conditions" element={<TnC />}></Route>
        <Route path="/signin" element={<Singin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

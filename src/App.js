import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./routes/about/About";
import Guide from "./routes/guide/Guide";
import Home from "./routes/home/Home";
import Services from "./routes/services/Services";
import Sales from "./routes/sales/Sales";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

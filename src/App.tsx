import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home";
import "./App.css";
import { NotFound } from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Widgets/Footer/Footer";
import "./App.css";
import Header from "../Widgets/Header/Header";
import Home from "../Pages/Home/Home";
import { NotFound } from "../Pages/NotFound";

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
        {/* <Footer />   */}
        <Footer />
      </Router>
    </>
  );
}
export default App;

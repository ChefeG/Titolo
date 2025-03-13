import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Widgets/Footer/Footer";
import "./App.css";
import Header from "../Widgets/Header/Header";
import { NotFound } from "../Pages/NotFound/ui/NotFound";
import Home from "../Pages/Home/ui/Home";
import ProductCard from "../Pages/ProductCard/ui/ProductCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            //TODO: сделать динамическое название
              <Route path="Men">
                <Route path="ProductCard" element={<ProductCard />} />
              </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;

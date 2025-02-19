import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <h1>Hello</h1>
        <h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1><h1>Hello</h1>
        </main>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

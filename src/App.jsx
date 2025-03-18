import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mainNav, footerNav } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const allRoutes = [...mainNav, ...footerNav];

  return (
    <Router>
      <Navbar />
      <Routes>
        {allRoutes.map(({ url, component: Component }, index) => (
          <Route key={index} path={url} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

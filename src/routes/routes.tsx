// routes.tsx

import Contact from "page/contact";
import Home from "page/home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  </Router>
);

export default AppRoutes;

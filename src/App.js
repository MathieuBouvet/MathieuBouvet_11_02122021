import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout-parts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    );
  }
}

export default App;

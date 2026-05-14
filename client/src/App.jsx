import React from "react";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./components/Home/Home";
import Tourism from "./components/Tourism/Tourism";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="tourism" element={<Tourism />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

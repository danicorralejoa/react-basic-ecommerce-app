import React from "react";
import Navigation from "../organisms/Navigation";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;

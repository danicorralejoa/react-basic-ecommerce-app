import React from "react";
import Navigation from "../organisms/Navigation";
import { Outlet } from "react-router-dom";
import MainMenu from "../molecules/header/MainMenu";

const App = () => {
  return (
    <>
      <Navigation>
        <MainMenu />
      </Navigation>
      <Outlet />
    </>
  );
};

export default App;

import React from "react";
import Navigation from "../organisms/Navigation";
import { Outlet } from "react-router-dom";
import AdminMenu from "../molecules/header/AdminMenu";

const Admin = () => {
  return (
    <>
      <Navigation>
        <AdminMenu />
      </Navigation>
      <Outlet />
    </>
  );
};

export default Admin;

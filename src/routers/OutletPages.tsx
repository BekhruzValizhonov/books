import React from "react";
import Header from "@/layouts/header";
import { Outlet } from "react-router-dom";

const OutletPages = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default OutletPages;

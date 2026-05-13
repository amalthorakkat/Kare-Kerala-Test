import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const UserLayout = () => {
  const { pathname } = useLocation();
  const hideFooter = pathname.startsWith("/tourism");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grow pt-15">
        <Outlet />
      </div>
      {!hideFooter && <Footer className="absolute bottom-0 w-full" />}
    </div>
  );
};

export default UserLayout;

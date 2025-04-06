import { Outlet } from "react-router-dom";
import { Header } from "../UI/Header.jsx";
import { Footer } from "../UI/Footer.jsx";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

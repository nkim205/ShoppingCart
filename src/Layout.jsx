import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ numitem, addFn }) => {
  return (
    <>
      <NavBar numitem={numitem} />
      <Outlet context={{ numitem, addFn }} />
    </>
  );
};

export default Layout;

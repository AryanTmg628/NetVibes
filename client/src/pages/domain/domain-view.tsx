import { TopBar } from "../../components/top-bar/top-bar.tsx";
import { ResponsiveAppBar } from "../../components/responsive-app-bar/responsive-app-bar.tsx";
import { Outlet } from "react-router-dom";

export const DomainView = () => {
  return (
    <>
      <TopBar />
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

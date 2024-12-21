import React from "react";
import { Helmet } from "react-helmet-async";
import { DashBoardView } from "../../modules/dashboard/dashboard-view";
import { ProtectedRoutes } from "../../routes/protected-routes";

export const DashBoard = () => {
  return (
    <ProtectedRoutes>
      <Helmet>
        <title>Dashboard </title>
      </Helmet>
      <DashBoardView />
    </ProtectedRoutes>
  );
};

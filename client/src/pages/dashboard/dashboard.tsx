import React from "react";
import { Helmet } from "react-helmet-async";
import { DashBoardView } from "../../modules/dashboard/dashboard-view";

export const DashBoard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard </title>
      </Helmet>
      <DashBoardView />
    </>
  );
};

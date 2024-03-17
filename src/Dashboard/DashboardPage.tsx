/* eslint-disable react-hooks/exhaustive-deps */
import { useGetChannels, useUserDetails } from "@/shared";
import { Content, Nav, SideBar } from ".";
import "./dashboardPage.css";
import { useEffect } from "react";

export const DashboardPage = () => {
  const { fetchChannels } = useGetChannels();
  const { isLogged } = useUserDetails();
  useEffect(() => {
    fetchChannels(isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <Nav />
      <SideBar />
      <Content />
    </div>
  );
};

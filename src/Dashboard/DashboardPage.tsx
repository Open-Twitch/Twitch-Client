import { Content, Nav, SideBar } from ".";
import "./dashboardPage.css";

export const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <Nav />
      <SideBar />
      <Content />
    </div>
  );
};

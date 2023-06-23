import { FunctionComponent } from "react";

import { DashboardStyle } from "../../styles/dashboardCSS";
import { Container, Col, Row } from "react-bootstrap";
import DashBoardHeader from "./dashboard-header";
import DashboardContent from "./dashboard-content";
import "./dashboard.scss";
import "bootstrap/dist/css/bootstrap.min.css";
interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <DashboardStyle></DashboardStyle>

      <DashBoardHeader />
      <DashboardContent />
    </>
  );
};

export default Dashboard;

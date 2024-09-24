import React from "react";
import { Pie, Bar, Line, Radar, Doughnut, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";
import { Container, Row, Col } from "react-bootstrap";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  RadialLinearScale
);

const CustomerSegmentationDashboard = () => {
  // Example data for charts
  const customerSegments = {
    highValue: 45,
    moderateValue: 30,
    lowValue: 25,
  };

  const demographics = {
    ageGroups: ["18-25", "26-35", "36-45", "46-55", "55+"],
    values: [15, 25, 20, 20, 20],
  };

  const pieData = {
    labels: ["High Value", "Moderate Value", "Low Value"],
    datasets: [
      {
        data: [
          customerSegments.highValue,
          customerSegments.moderateValue,
          customerSegments.lowValue,
        ],
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: demographics.ageGroups,
    datasets: [
      {
        label: "Customers by Age Group",
        data: demographics.values,
        backgroundColor: [
          "#4caf50",
          "#ffeb3b",
          "#f44336",
          "#2196f3",
          "#ff5722",
        ],
      },
    ],
  };

  const lineData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Customer Engagement Over Time",
        data: [60, 75, 85, 90],
        fill: false,
        backgroundColor: "#ffeb3b",
        borderColor: "#f44336",
      },
    ],
  };

  const radarData = {
    labels: ["High Value", "Moderate Value", "Low Value"],
    datasets: [
      {
        label: "Customer Satisfaction",
        data: [95, 80, 70],
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Product Preference",
        data: [40, 30, 20, 10],
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336", "#2196f3"],
      },
    ],
  };

  const polarData = {
    labels: ["North America", "Europe", "Asia", "South America", "Africa"],
    datasets: [
      {
        label: "Customer Distribution by Region",
        data: [50, 30, 10, 7, 3],
        backgroundColor: [
          "#4caf50",
          "#ffeb3b",
          "#f44336",
          "#2196f3",
          "#ff5722",
        ],
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Customer Segmentation Dashboard</h2>
      <p className="text-center">
        This dashboard provides an overview of customer segmentation analysis,
        highlighting key insights such as high-value customer distribution,
        demographics, product preferences, and geographic regions.
      </p>

      <Row className="mt-5">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Customer Segmentation</h5>
          <Pie data={pieData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Customers by Age Group</h5>
          <Bar data={barData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Customer Engagement Over Time</h5>
          <Line data={lineData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Customer Satisfaction by Segment</h5>
          <Radar data={radarData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Product Preference</h5>
          <Doughnut data={doughnutData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Customer Distribution by Region</h5>
          <PolarArea data={polarData} />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerSegmentationDashboard;

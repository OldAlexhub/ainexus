import React from "react";
import { Bar, Line, Pie, Radar, Doughnut, PolarArea } from "react-chartjs-2";
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

const PredictiveSalesAnalyticsDashboard = () => {
  // Example data for predictive sales analytics
  const quarterlySales = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    values: [150000, 175000, 190000, 220000],
  };

  const productSalesForecast = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    values: [50000, 60000, 40000, 30000],
  };

  const customerAcquisition = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [500, 700, 900, 1100, 1000, 1300],
  };

  const barData = {
    labels: quarterlySales.labels,
    datasets: [
      {
        label: "Quarterly Sales Forecast (USD)",
        data: quarterlySales.values,
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336", "#2196f3"],
      },
    ],
  };

  const lineData = {
    labels: customerAcquisition.months,
    datasets: [
      {
        label: "Customer Acquisition Over Time",
        data: customerAcquisition.values,
        fill: false,
        backgroundColor: "#2196f3",
        borderColor: "#4caf50",
      },
    ],
  };

  const pieData = {
    labels: productSalesForecast.labels,
    datasets: [
      {
        data: productSalesForecast.values,
        backgroundColor: ["#f44336", "#4caf50", "#ffeb3b", "#2196f3"],
        hoverOffset: 4,
      },
    ],
  };

  const radarData = {
    labels: [
      "Revenue",
      "Cost",
      "Profit",
      "Market Share",
      "Customer Satisfaction",
    ],
    datasets: [
      {
        label: "Performance Metrics",
        data: [90, 80, 85, 70, 95],
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: "rgba(63, 81, 181, 1)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Direct Sales", "Online Sales", "Retail", "Wholesale"],
    datasets: [
      {
        label: "Sales Channels",
        data: [40, 30, 20, 10],
        backgroundColor: ["#4caf50", "#f44336", "#ffeb3b", "#2196f3"],
      },
    ],
  };

  const polarData = {
    labels: ["North America", "Europe", "Asia", "South America", "Africa"],
    datasets: [
      {
        label: "Geographical Sales Distribution",
        data: [45, 30, 15, 7, 3],
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
      <h2 className="text-center mb-4">Predictive Sales Analytics Dashboard</h2>
      <p className="text-center">
        This dashboard provides insights into predicted sales trends, customer
        acquisition forecasts, and performance across different channels and
        products. Using historical data and machine learning algorithms, we can
        forecast future sales and optimize sales strategies.
      </p>

      <Row className="mt-5">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Quarterly Sales Forecast</h5>
          <Bar data={barData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Customer Acquisition Forecast</h5>
          <Line data={lineData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Product Sales Forecast</h5>
          <Pie data={pieData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Performance Metrics</h5>
          <Radar data={radarData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Sales Channels Breakdown</h5>
          <Doughnut data={doughnutData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Geographical Sales Distribution</h5>
          <PolarArea data={polarData} />
        </Col>
      </Row>
    </Container>
  );
};

export default PredictiveSalesAnalyticsDashboard;

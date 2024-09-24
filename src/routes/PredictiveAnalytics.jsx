import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Line, Bar, Pie, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";

// Register the chart components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const PredictiveAnalytics = () => {
  // Example data for revenue forecasting (Line chart)
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Projected Revenue",
        data: [10000, 12000, 14000, 13000, 15000, 16000, 17000],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Actual Revenue",
        data: [9000, 11500, 13500, 12500, 14500, 15500, 16500],
        fill: false,
        borderColor: "#742774",
        tension: 0.1,
      },
    ],
  };

  // Example data for expense analysis (Bar chart)
  const expenseData = {
    labels: ["HR", "Marketing", "Operations", "IT", "Sales", "Legal"],
    datasets: [
      {
        label: "Projected Expenses",
        data: [8000, 7000, 10000, 9500, 12000, 7500],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Actual Expenses",
        data: [8500, 6800, 9500, 10000, 11500, 7200],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Example data for fraud prediction (Pie chart)
  const fraudData = {
    labels: ["No Fraud", "Predicted Fraud"],
    datasets: [
      {
        label: "Fraud Detection",
        data: [95, 5], // 95% no fraud, 5% fraud prediction
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // Cash flow forecast (Doughnut chart)
  const cashFlowData = {
    labels: [
      "Operating Income",
      "Investing Activities",
      "Financing Activities",
    ],
    datasets: [
      {
        label: "Cash Flow Forecast",
        data: [40000, 15000, 5000],
        backgroundColor: ["#4BC0C0", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#4BC0C0", "#FFCE56", "#FF6384"],
      },
    ],
  };

  // Cost-benefit analysis (Radar chart)
  const costBenefitData = {
    labels: [
      "Infrastructure",
      "HR",
      "Marketing",
      "Product Development",
      "Sales",
    ],
    datasets: [
      {
        label: "Benefits",
        data: [80, 90, 85, 70, 95],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Costs",
        data: [60, 70, 80, 60, 85],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  // Profit margin analysis (Bar chart)
  const profitMarginData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Projected Profit Margin",
        data: [15, 20, 25, 30],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Actual Profit Margin",
        data: [13, 18, 23, 28],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container fluid className="mt-5">
      <Row className="mb-4">
        <Col>
          <h2 style={{ textAlign: "center" }}>
            Predictive Analytics Dashboard for Finance Department
          </h2>
          <p>
            This dashboard presents predictive analytics across key financial
            areas to aid decision-making in the finance department. These charts
            provide insights into projected versus actual revenues, expense
            management, fraud detection, and other financial metrics. By
            leveraging predictive analytics, the finance team can plan better,
            reduce risk, and improve overall financial health.
          </p>
        </Col>
      </Row>

      <Row>
        {/* Revenue Forecasting */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Revenue Forecasting</Card.Title>
              <Line data={revenueData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>

        {/* Expense Analysis */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Expense Analysis</Card.Title>
              <Bar data={expenseData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Fraud Detection Prediction */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Fraud Detection Prediction</Card.Title>
              <Pie data={fraudData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>

        {/* Cash Flow Forecast */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Cash Flow Forecast</Card.Title>
              <Doughnut data={cashFlowData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Cost Benefit Analysis */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Cost-Benefit Analysis</Card.Title>
              <Radar data={costBenefitData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>

        {/* Profit Margin Analysis */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Profit Margin Analysis</Card.Title>
              <Bar data={profitMarginData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PredictiveAnalytics;

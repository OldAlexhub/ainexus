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

const SpendingAnalytics = () => {
  // Example data for monthly spending by department (Line chart)
  const monthlySpendingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Projected Spending",
        data: [5000, 7000, 8000, 7500, 9000, 8500, 10000],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Actual Spending",
        data: [5500, 6800, 8200, 7000, 9500, 8300, 10200],
        fill: false,
        borderColor: "#742774",
        tension: 0.1,
      },
    ],
  };

  // Example data for department-wise spending (Bar chart)
  const departmentSpendingData = {
    labels: ["HR", "Marketing", "Operations", "IT", "Sales", "Legal"],
    datasets: [
      {
        label: "Spending",
        data: [12000, 15000, 13000, 14000, 16000, 11000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Example data for category-wise spending (Pie chart)
  const categorySpendingData = {
    labels: [
      "Salaries",
      "Office Supplies",
      "Marketing",
      "Travel",
      "Consulting",
    ],
    datasets: [
      {
        label: "Spending by Category",
        data: [40000, 10000, 15000, 8000, 12000],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  // Travel expenses (Doughnut chart)
  const travelExpenseData = {
    labels: [
      "Domestic Travel",
      "International Travel",
      "Hotel & Lodging",
      "Airfare",
    ],
    datasets: [
      {
        label: "Travel Expenses",
        data: [8000, 5000, 4000, 6000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FFCE00"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FFCE00"],
      },
    ],
  };

  // Projected vs Actual overhead costs (Radar chart)
  const overheadCostsData = {
    labels: [
      "Infrastructure",
      "Utilities",
      "Maintenance",
      "Supplies",
      "Insurance",
    ],
    datasets: [
      {
        label: "Projected Costs",
        data: [15000, 8000, 6000, 5000, 7000],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Actual Costs",
        data: [16000, 9000, 5000, 6000, 7500],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  // Spending trends analysis (Bar chart)
  const spendingTrendsData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Projected Spending",
        data: [30000, 35000, 40000, 45000],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Actual Spending",
        data: [32000, 33000, 38000, 46000],
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
            Spending Analytics Dashboard for Finance Department
          </h2>
          <p style={{ textAlign: "center" }}>
            This dashboard provides insights into the company's spending
            patterns across different departments and categories. It compares
            projected vs. actual spending, analyzes department-wise allocations,
            and tracks spending trends to help the finance team manage budgets
            effectively and optimize costs.
          </p>
        </Col>
      </Row>

      <Row>
        {/* Monthly Spending Analysis */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Monthly Spending Analysis</Card.Title>
              <Line data={monthlySpendingData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>

        {/* Department Spending */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Department Spending</Card.Title>
              <Bar
                data={departmentSpendingData}
                options={{ responsive: true }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Category-Wise Spending */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Spending by Category</Card.Title>
              <Pie data={categorySpendingData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>

        {/* Travel Expenses */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Travel Expenses Breakdown</Card.Title>
              <Doughnut
                data={travelExpenseData}
                options={{ responsive: true }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Overhead Costs Analysis */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Overhead Costs Analysis</Card.Title>
              <Radar data={overheadCostsData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>

        {/* Spending Trends */}
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Spending Trends Analysis</Card.Title>
              <Bar data={spendingTrendsData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SpendingAnalytics;

import React from "react";
import { Container, Row, Col, Card, ProgressBar, Table } from "react-bootstrap";
import { Line, Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

const EmployeeAnalytics = () => {
  // Example data for the charts
  const employeeSatisfactionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Employee Satisfaction (%)",
        data: [85, 80, 78, 88, 82, 90],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const departmentDistributionData = {
    labels: ["HR", "Engineering", "Sales", "Marketing", "Finance"],
    datasets: [
      {
        label: "Number of Employees",
        data: [10, 35, 25, 20, 15],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const averageTenureData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Average Tenure (Years)",
        data: [2.5, 3, 2.8, 3.2],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <Container fluid className="mt-5">
      {/* Intro section */}
      <Row className="mb-5">
        <Col className="text-center">
          <h2>Employee Analytics Dashboard</h2>
          <p className="lead">
            This dashboard provides an overview of key employee metrics such as
            satisfaction, retention, department distribution, and tenure. The
            data is designed to help HR and management teams make informed
            decisions to improve employee engagement, productivity, and overall
            company culture.
          </p>
        </Col>
      </Row>

      {/* KPI Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Retention Rate</Card.Title>
              <h4>92%</h4>
              <ProgressBar now={92} label="92%" variant="success" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Average Tenure</Card.Title>
              <h4>3.2 Years</h4>
              <ProgressBar now={80} label="3.2 yrs" variant="info" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Employee Satisfaction</Card.Title>
              <h4>85%</h4>
              <ProgressBar now={85} label="85%" variant="warning" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>New Hires</Card.Title>
              <h4>15</h4>
              <ProgressBar now={30} label="15" variant="primary" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Employee Satisfaction Over Time</Card.Header>
            <Card.Body>
              <Line data={employeeSatisfactionData} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Department Distribution</Card.Header>
            <Card.Body>
              <Pie data={departmentDistributionData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Average Tenure by Quarter</Card.Header>
            <Card.Body>
              <Bar data={averageTenureData} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Top Performers</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Performance Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Engineering</td>
                    <td>95%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>Sales</td>
                    <td>93%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Emily Johnson</td>
                    <td>HR</td>
                    <td>90%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeAnalytics;

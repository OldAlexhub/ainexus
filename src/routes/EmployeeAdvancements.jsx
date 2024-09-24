import React from "react";
import { Container, Row, Col, Card, ProgressBar, Table } from "react-bootstrap";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const EmployeeAdvancements = () => {
  // Example data for the charts
  const promotionsData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Number of Promotions",
        data: [5, 10, 15, 20, 30],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const certificationsData = {
    labels: ["Technical Certifications", "Soft Skills", "Leadership"],
    datasets: [
      {
        label: "Certifications",
        data: [45, 25, 15],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const learningHoursData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Average Learning Hours",
        data: [10, 12, 8, 14],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <Container fluid className="mt-5">
      {/* Intro section */}
      <Row className="mb-5">
        <Col className="text-center">
          <h2>Employee Advancements Dashboard</h2>
          <p className="lead">
            This dashboard provides insights into how the company is investing
            in its employees through promotions, learning programs,
            certifications, and career development opportunities. The data is
            designed to show the company's commitment to employee growth and
            career progression.
          </p>
        </Col>
      </Row>

      {/* KPI Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Promotions This Year</Card.Title>
              <h4>30</h4>
              <ProgressBar now={75} label="30" variant="success" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Employees in Leadership</Card.Title>
              <h4>12%</h4>
              <ProgressBar now={12} label="12%" variant="info" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Avg. Learning Hours</Card.Title>
              <h4>12 Hrs/Month</h4>
              <ProgressBar now={60} label="12 Hrs" variant="warning" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Certifications Earned</Card.Title>
              <h4>85</h4>
              <ProgressBar now={85} label="85" variant="primary" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Promotions Over Time</Card.Header>
            <Card.Body>
              <Line data={promotionsData} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Certifications Breakdown</Card.Header>
            <Card.Body>
              <Doughnut data={certificationsData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Average Learning Hours by Quarter</Card.Header>
            <Card.Body>
              <Bar data={learningHoursData} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>Recent Internal Transfers</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Employee</th>
                    <th>Previous Role</th>
                    <th>New Role</th>
                    <th>Transfer Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Software Engineer</td>
                    <td>Engineering Manager</td>
                    <td>Jan 2024</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>Sales Rep</td>
                    <td>Sales Manager</td>
                    <td>Feb 2024</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Emily Johnson</td>
                    <td>HR Assistant</td>
                    <td>HR Manager</td>
                    <td>Mar 2024</td>
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

export default EmployeeAdvancements;

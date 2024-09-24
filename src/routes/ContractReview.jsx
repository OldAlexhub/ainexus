import React, { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement
);

const ContractReview = () => {
  // Simulate live updates for contract risks and compliance monitoring
  const [keyClauses, setKeyClauses] = useState([
    { id: 1, clause: "Payment Terms", compliance: "Compliant", risk: "Low" },
    {
      id: 2,
      clause: "Termination Clause",
      compliance: "Non-Compliant",
      risk: "High",
    },
    { id: 3, clause: "Confidentiality", compliance: "Compliant", risk: "Low" },
    {
      id: 4,
      clause: "Dispute Resolution",
      compliance: "Compliant",
      risk: "Medium",
    },
  ]);

  const [riskLevels, setRiskLevels] = useState([20, 40, 15, 25]); // Simulate risk analysis
  const [complianceStatus, setComplianceStatus] = useState([75, 25]); // Compliance vs Non-Compliance

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate contract updates by toggling risk and compliance statuses
      setRiskLevels((prev) =>
        prev.map((val) => val + Math.floor(Math.random() * 5 - 2))
      ); // Random adjustment
      setComplianceStatus([Math.random() * 100, Math.random() * 100]); // Random compliance update
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Risk Levels by Contract Clauses Data
  const riskData = {
    labels: keyClauses.map((clause) => clause.clause),
    datasets: [
      {
        label: "Risk Level (%)",
        data: riskLevels,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Compliance Status Data
  const complianceData = {
    labels: ["Compliant", "Non-Compliant"],
    datasets: [
      {
        label: "Compliance (%)",
        data: complianceStatus,
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // Clause Review Activity over Time
  const activityData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Reviewed Clauses",
        data: [10, 20, 30, 40],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">AI-Powered Contract Reviewing</h2>
      <p className="text-center">
        This interface simulates AI-driven contract review, analyzing key
        clauses, identifying compliance risks, and flagging high-risk areas in
        contracts. AI ensures that legal teams are aware of potential issues
        before signing.
      </p>

      <Row className="mt-5">
        {/* Key Clauses and Compliance Status */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Compliance Status by Clause
              </Card.Title>
              <p className="text-center">
                Review the compliance status of key contract clauses.
              </p>
              <Pie data={complianceData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Risk Level by Clauses */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Risk Levels by Clauses
              </Card.Title>
              <p className="text-center">
                AI flags risky clauses that may lead to legal issues.
              </p>
              <Bar data={riskData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Clause Review Activity */}
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Clause Review Activity Over Time
              </Card.Title>
              <p className="text-center">
                Track how many clauses are being reviewed week over week.
              </p>
              <Line data={activityData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Active Alerts and Notifications */}
      <Row className="mt-5">
        <Col md={12}>
          <h5 className="text-center mb-3">
            Active Alerts and AI-Driven Notifications
          </h5>
          <p>
            AI has flagged the following contract clauses as high-risk or
            non-compliant. Review them carefully before proceeding with the
            contract:
          </p>
          <ul>
            {keyClauses
              .filter(
                (clause) =>
                  clause.risk === "High" ||
                  clause.compliance === "Non-Compliant"
              )
              .map((alert) => (
                <li key={alert.id}>
                  <Badge
                    bg={alert.risk === "High" ? "danger" : "warning"}
                    className="me-2"
                  >
                    {alert.risk === "High" ? "High Risk" : "Non-Compliant"}
                  </Badge>
                  {alert.clause} - {alert.compliance} - Risk: {alert.risk}
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ContractReview;

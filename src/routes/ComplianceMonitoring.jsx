import React, { useState, useEffect } from "react";
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadarController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadarController
);

const ComplianceMonitoring = () => {
  // Simulate real-time compliance data across different departments
  const [departmentCompliance, setDepartmentCompliance] = useState({
    HR: 85,
    IT: 75,
    Legal: 90,
    Finance: 60,
    Marketing: 70,
    Sales: 80,
  });

  const [complianceLevels, setComplianceLevels] = useState([
    85, 75, 90, 60, 70, 80,
  ]); // Initial data for departments
  const [complianceProgress, setComplianceProgress] = useState([
    20, 30, 60, 80, 100,
  ]); // Progress in compliance improvements

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate compliance levels updates
      const newComplianceLevels = complianceLevels.map((level) =>
        Math.max(60, Math.min(100, level + Math.floor(Math.random() * 5 - 2)))
      );
      setComplianceLevels(newComplianceLevels);

      const newProgress = complianceProgress.map(
        (progress) => progress + Math.floor(Math.random() * 5)
      );
      setComplianceProgress(newProgress);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [complianceLevels, complianceProgress]);

  // Data for Department Compliance Monitoring
  const departmentComplianceData = {
    labels: ["HR", "IT", "Legal", "Finance", "Marketing", "Sales"],
    datasets: [
      {
        label: "Compliance Level (%)",
        data: complianceLevels,
        backgroundColor: [
          "#4BC0C0",
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#8D4A4A",
          "#47B39C",
        ],
      },
    ],
  };

  // Compliance Progress Over Time
  const progressData = {
    labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"],
    datasets: [
      {
        label: "Compliance Progress",
        data: complianceProgress,
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Compliance Risk Areas
  const riskData = {
    labels: ["Finance", "IT", "Legal", "Marketing", "HR", "Sales"],
    datasets: [
      {
        label: "Compliance Risks",
        data: [40, 60, 20, 50, 30, 45],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "#FFCE56",
      },
    ],
  };

  // Compliance Radar Chart (Overall Compliance by Department)
  const radarData = {
    labels: ["HR", "IT", "Legal", "Finance", "Marketing", "Sales"],
    datasets: [
      {
        label: "Overall Compliance",
        data: complianceLevels,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">AI-Powered Compliance Monitoring</h2>
      <p className="text-center">
        This dashboard demonstrates how AI can monitor compliance across various
        departments. It tracks compliance rates, flags risk areas, and shows the
        progress over time in meeting compliance targets.
      </p>

      <Row className="mt-5">
        {/* Compliance Level by Department */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Compliance Levels by Department
              </Card.Title>
              <p className="text-center">
                Monitor how compliant each department is with internal policies
                and external regulations.
              </p>
              <Bar data={departmentComplianceData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Compliance Progress Over Time */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Compliance Progress Over Time
              </Card.Title>
              <p className="text-center">
                Track compliance improvements over the months.
              </p>
              <Line data={progressData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Compliance Risk Areas */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Compliance Risk Areas
              </Card.Title>
              <p className="text-center">
                AI flags high-risk departments for compliance issues.
              </p>
              <Doughnut data={riskData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Overall Compliance by Department (Radar) */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Overall Compliance by Department
              </Card.Title>
              <p className="text-center">
                View how each department performs in terms of overall
                compliance.
              </p>
              <Radar data={radarData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Compliance Summary */}
      <Row className="mt-5">
        <Col md={12}>
          <h5 className="text-center mb-3">Compliance Alerts and Insights</h5>
          <p>
            AI has identified the following departments as having potential
            compliance risks. Monitor these areas carefully to ensure compliance
            with industry regulations:
          </p>
          <ul>
            {Object.keys(departmentCompliance).map((dept, index) => (
              <li key={index}>
                <Badge
                  bg={departmentCompliance[dept] < 70 ? "danger" : "warning"}
                  className="me-2"
                >
                  {departmentCompliance[dept] < 70
                    ? "High Risk"
                    : "Moderate Risk"}
                </Badge>
                {dept} - Compliance Level: {departmentCompliance[dept]}%
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ComplianceMonitoring;

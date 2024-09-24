import React, { useState, useEffect } from "react";
import { Line, Doughnut } from "react-chartjs-2";
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

const ITSecurityMonitoring = () => {
  // Simulate live updates for unauthorized access attempts and security monitoring
  const [unauthorizedAttempts, setUnauthorizedAttempts] = useState(3);
  const [systemHealth, setSystemHealth] = useState(90);
  const [networkTraffic, setNetworkTraffic] = useState([60, 80, 70, 90, 75]);
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      message: "Suspicious login attempt detected",
      type: "Unauthorized Access",
    },
    { id: 2, message: "Unusual data download activity", type: "Data Breach" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live updates for security monitoring
      setUnauthorizedAttempts((prev) => prev + Math.floor(Math.random() * 2)); // Random unauthorized attempts
      setSystemHealth((prev) => prev - Math.random() * 0.5); // Gradual decrease in system health
      setNetworkTraffic((prev) =>
        prev.map((val) => val + Math.floor(Math.random() * 10 - 5))
      ); // Simulate network traffic
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Network Traffic Data
  const networkTrafficData = {
    labels: ["10:00", "10:01", "10:02", "10:03", "10:04"],
    datasets: [
      {
        label: "Network Traffic (MB/s)",
        data: networkTraffic,
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  // Unauthorized Access Attempts
  const unauthorizedAccessData = {
    labels: ["Last 5 Minutes", "Now"],
    datasets: [
      {
        label: "Unauthorized Attempts",
        data: [unauthorizedAttempts - 2, unauthorizedAttempts],
        backgroundColor: ["#FF6384", "#FFCE56"],
      },
    ],
  };

  // System Health
  const systemHealthData = {
    labels: ["System Health"],
    datasets: [
      {
        data: [systemHealth, 100 - systemHealth],
        backgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">AI-Driven IT & Security Monitoring</h2>
      <p className="text-center">
        This interface simulates real-time monitoring of your IT infrastructure
        and security. AI-powered systems detect suspicious behavior,
        unauthorized access attempts, and maintain system health through
        constant analysis.
      </p>

      <Row className="mt-5">
        {/* Network Traffic Monitoring */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Network Traffic Monitoring
              </Card.Title>
              <p className="text-center">
                Live network traffic monitoring to detect anomalies in data
                flow.
              </p>
              <Line data={networkTrafficData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Unauthorized Access Detection */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Unauthorized Access Detection
              </Card.Title>
              <p className="text-center">
                AI detects unauthorized access attempts and alerts the system in
                real-time.
              </p>
              <Doughnut data={unauthorizedAccessData} />
            </Card.Body>
          </Card>
        </Col>

        {/* System Health Monitoring */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                System Health Monitoring
              </Card.Title>
              <p className="text-center">
                AI ensures system stability by tracking hardware and software
                performance.
              </p>
              <Doughnut data={systemHealthData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Alerts and Notifications */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Security Alerts</Card.Title>
              <ul>
                {alerts.map((alert) => (
                  <li key={alert.id}>
                    <Badge bg="danger" className="me-2">
                      {alert.type}
                    </Badge>
                    {alert.message}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional AI-Driven Insights */}
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h5 className="mb-3">AI-Driven Insights</h5>
          <p>
            AI helps in proactive monitoring, ensuring unauthorized users are
            detected before breaches occur. It continuously evaluates network
            traffic, system health, and generates real-time alerts to help
            maintain security.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ITSecurityMonitoring;

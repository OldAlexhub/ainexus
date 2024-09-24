import React from "react";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
} from "chart.js";
import { Container, Row, Col, Card } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale
);

const PredictiveMaintenance = () => {
  // Data for vibration analysis
  const vibrationData = {
    labels: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
    datasets: [
      {
        label: "Vibration Levels (Hz)",
        data: [70, 90, 65, 85],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Temperature analysis
  const temperatureData = {
    labels: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [75, 80, 70, 85],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  // Downtime Analysis
  const downtimeData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Downtime (Hours)",
        data: [5, 10, 3, 7],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // Energy consumption
  const energyData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Energy Consumption (kWh)",
        data: [500, 600, 550, 650],
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
      },
    ],
  };

  // Maintenance schedule optimization
  const maintenanceScheduleData = {
    labels: ["Scheduled", "Unscheduled", "Overdue", "Completed"],
    datasets: [
      {
        label: "Maintenance Tasks",
        data: [30, 10, 5, 25],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // Risk of breakdown
  const riskData = {
    labels: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
    datasets: [
      {
        label: "Risk of Breakdown",
        data: [20, 50, 30, 40],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">AI-Driven Predictive Maintenance</h2>
      <p className="text-center">
        This dashboard showcases how AI can monitor and predict maintenance
        needs by analyzing various factors like vibration, temperature, energy
        consumption, downtime, and risks of machine failure.
      </p>

      {/* Card Layout for Different Predictive Maintenance Aspects */}
      <Row className="mt-5">
        {/* Vibration Analysis */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Vibration Analysis
              </Card.Title>
              <p className="text-center">
                AI detects unusual vibration patterns, preventing mechanical
                failures.
              </p>
              <Line data={vibrationData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Temperature Monitoring */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Temperature Monitoring
              </Card.Title>
              <p className="text-center">
                AI tracks machine temperatures to avoid overheating and damage.
              </p>
              <Line data={temperatureData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Downtime Analysis */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Downtime Analysis</Card.Title>
              <p className="text-center">
                Analyzing machine downtime helps optimize performance and
                minimize loss.
              </p>
              <Bar data={downtimeData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Energy Consumption */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Energy Consumption
              </Card.Title>
              <p className="text-center">
                AI ensures energy efficiency by monitoring consumption patterns.
              </p>
              <Bar data={energyData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Maintenance Schedule Optimization */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Maintenance Schedule Optimization
              </Card.Title>
              <p className="text-center">
                AI recommends the optimal maintenance schedule, reducing
                unplanned downtime.
              </p>
              <Doughnut data={maintenanceScheduleData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Risk of Breakdown */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Risk of Breakdown</Card.Title>
              <p className="text-center">
                AI evaluates the risk of machine breakdown based on multiple
                parameters.
              </p>
              <Radar data={riskData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* AI-Driven Insights */}
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h5 className="mb-3">AI-Driven Insights</h5>
          <p>
            AI's predictive maintenance capabilities help reduce downtime,
            improve machine performance, optimize energy usage, and prevent
            unexpected breakdowns. By analyzing various data points, AI ensures
            machinery runs smoothly and efficiently.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PredictiveMaintenance;

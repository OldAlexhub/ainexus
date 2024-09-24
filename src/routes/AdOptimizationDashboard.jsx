import React from "react";
import { Bar, Pie, Line, Radar, Doughnut, PolarArea } from "react-chartjs-2";
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

const AdOptimizationDashboard = () => {
  // Example data showcasing AI-driven insights for ad campaign optimization
  const adChannels = {
    labels: [
      "Google Ads",
      "Facebook Ads",
      "LinkedIn Ads",
      "Instagram Ads",
      "Twitter Ads",
    ],
    values: [35, 25, 20, 10, 10],
  };

  const clickThroughRate = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [2.5, 2.7, 3.1, 3.5, 3.8, 4.1],
  };

  const audienceSegments = {
    labels: [
      "Tech Enthusiasts",
      "Small Business Owners",
      "Corporate Executives",
      "Students",
      "Freelancers",
    ],
    values: [30, 20, 25, 15, 10],
  };

  const adSpendDistribution = {
    labels: adChannels.labels,
    datasets: [
      {
        label: "Ad Spend Distribution",
        data: adChannels.values,
        backgroundColor: [
          "#4caf50",
          "#ffeb3b",
          "#f44336",
          "#2196f3",
          "#9c27b0",
        ],
      },
    ],
  };

  const clickThroughRateData = {
    labels: clickThroughRate.months,
    datasets: [
      {
        label: "Click-Through Rate (CTR)",
        data: clickThroughRate.values,
        fill: false,
        backgroundColor: "#2196f3",
        borderColor: "#4caf50",
      },
    ],
  };

  const audienceBarData = {
    labels: audienceSegments.labels,
    datasets: [
      {
        label: "Audience Segments",
        data: audienceSegments.values,
        backgroundColor: [
          "#4caf50",
          "#ffeb3b",
          "#f44336",
          "#2196f3",
          "#9c27b0",
        ],
      },
    ],
  };

  const radarData = {
    labels: [
      "Engagement",
      "Reach",
      "CTR",
      "Conversions",
      "Ad Spend Efficiency",
    ],
    datasets: [
      {
        label: "Ad Campaign Performance Metrics",
        data: [80, 85, 70, 75, 90],
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        borderColor: "rgba(255, 87, 34, 1)",
        pointBackgroundColor: "rgba(255, 87, 34, 1)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Conversions", "Non-Conversions"],
    datasets: [
      {
        label: "Conversion Rate",
        data: [30, 70],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  const polarData = {
    labels: [
      "Video Ads",
      "Display Ads",
      "Search Ads",
      "Social Ads",
      "Email Ads",
    ],
    datasets: [
      {
        label: "Ad Format Performance",
        data: [40, 30, 35, 50, 20],
        backgroundColor: [
          "#2196f3",
          "#ffeb3b",
          "#f44336",
          "#4caf50",
          "#9c27b0",
        ],
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">AI-Powered Ad Optimization Dashboard</h2>
      <p className="text-center">
        This dashboard illustrates how AI can optimize ad campaigns by analyzing
        ad spend, click-through rates, audience segments, and conversions. With
        AI, we can identify the most effective channels, audience segments, and
        ad formats to maximize ROI in ad campaigns.
      </p>

      <Row className="mt-5">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Ad Spend Distribution</h5>
          <Pie data={adSpendDistribution} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Click-Through Rate Over Time</h5>
          <Line data={clickThroughRateData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Audience Segments Targeted</h5>
          <Bar data={audienceBarData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Ad Campaign Performance Metrics</h5>
          <Radar data={radarData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Conversion Rate</h5>
          <Doughnut data={doughnutData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Ad Format Performance</h5>
          <PolarArea data={polarData} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdOptimizationDashboard;

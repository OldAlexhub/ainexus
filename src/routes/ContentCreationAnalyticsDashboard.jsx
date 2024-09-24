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

const ContentCreationAnalyticsDashboard = () => {
  // Example data showcasing AI-driven insights for content creation
  const contentTypes = {
    labels: ["Blog", "Social Media", "Video", "Ebooks", "Infographics"],
    values: [30, 40, 15, 10, 5],
  };

  const audienceEngagement = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [500, 700, 1100, 1500, 1800, 2100],
  };

  const topPerformingArticles = {
    labels: [
      "How to Boost Sales",
      "AI in Marketing",
      "Content Strategy",
      "Social Media Trends",
    ],
    values: [1000, 850, 900, 700],
  };

  const contentTypeDistribution = {
    labels: contentTypes.labels,
    datasets: [
      {
        label: "Content Type Distribution",
        data: contentTypes.values,
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

  const engagementLineData = {
    labels: audienceEngagement.months,
    datasets: [
      {
        label: "Audience Engagement (Likes, Shares, Comments)",
        data: audienceEngagement.values,
        fill: false,
        backgroundColor: "#2196f3",
        borderColor: "#4caf50",
      },
    ],
  };

  const articlesBarData = {
    labels: topPerformingArticles.labels,
    datasets: [
      {
        label: "Top Performing Articles (Views)",
        data: topPerformingArticles.values,
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336", "#2196f3"],
      },
    ],
  };

  const radarData = {
    labels: ["Engagement", "Reach", "Clicks", "Time on Page", "Conversions"],
    datasets: [
      {
        label: "Content Performance Metrics",
        data: [85, 90, 70, 65, 80],
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: "rgba(63, 81, 181, 1)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "Sentiment Analysis",
        data: [70, 10, 20],
        backgroundColor: ["#4caf50", "#f44336", "#ffeb3b"],
      },
    ],
  };

  const polarData = {
    labels: ["Instagram", "LinkedIn", "Twitter", "Facebook", "YouTube"],
    datasets: [
      {
        label: "Platform Performance",
        data: [40, 30, 20, 25, 35],
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
      <h2 className="text-center mb-4">
        AI-Powered Content Creation Dashboard
      </h2>
      <p className="text-center">
        This dashboard showcases how AI can optimize content creation by
        analyzing content types, audience engagement, sentiment, and platform
        performance. With AI, we can predict which content will perform best,
        target the right audience, and even automate certain aspects of content
        strategy.
      </p>

      <Row className="mt-5">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Content Type Distribution</h5>
          <Pie data={contentTypeDistribution} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Audience Engagement Over Time</h5>
          <Line data={engagementLineData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Top Performing Articles</h5>
          <Bar data={articlesBarData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Content Performance Metrics</h5>
          <Radar data={radarData} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <h5 className="text-center">Audience Sentiment Analysis</h5>
          <Doughnut data={doughnutData} />
        </Col>
        <Col md={6} className="mb-4">
          <h5 className="text-center">Platform Performance Overview</h5>
          <PolarArea data={polarData} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContentCreationAnalyticsDashboard;

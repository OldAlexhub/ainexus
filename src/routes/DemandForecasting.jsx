import React from "react";
import { Line, Bar, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
} from "chart.js";
import { Container, Row, Col } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale
);

const DemandForecasting = () => {
  // Data for demand forecasting across regions and products
  const forecastData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Product A",
        data: [120, 150, 100, 180, 170, 210, 230, 200, 220, 240, 260, 280],
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true,
      },
      {
        label: "Product B",
        data: [80, 90, 130, 160, 140, 190, 220, 230, 210, 250, 270, 300],
        borderColor: "#FFA726",
        backgroundColor: "rgba(255, 167, 38, 0.2)",
        fill: true,
      },
    ],
  };

  // Data for demand across different regions
  const regionDemandData = {
    labels: [
      "North America",
      "Europe",
      "Asia",
      "South America",
      "Africa",
      "Australia",
    ],
    datasets: [
      {
        label: "Product A",
        data: [1500, 1300, 1800, 800, 400, 500],
        backgroundColor: "#42A5F5",
      },
      {
        label: "Product B",
        data: [1100, 1000, 1600, 700, 500, 450],
        backgroundColor: "#FFA726",
      },
    ],
  };

  // Inventory accuracy based on AI predictions
  const radarData = {
    labels: [
      "Stockouts",
      "Overstock",
      "Accurate Inventory",
      "Lead Time Reduction",
      "Order Fulfillment",
    ],
    datasets: [
      {
        label: "AI-Driven Forecast",
        data: [85, 90, 95, 80, 85],
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderColor: "rgba(76, 175, 80, 1)",
        pointBackgroundColor: "rgba(76, 175, 80, 1)",
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">AI-Powered Demand Forecasting</h2>
      <p className="text-center">
        Discover how AI can optimize demand forecasting by analyzing product
        trends, regional demand, and inventory needs. With real-time data, AI
        enables more accurate planning, reduces stockouts, and helps maintain
        optimal inventory levels.
      </p>

      {/* Line Chart for Product Demand */}
      <Row className="mt-5">
        <Col md={12} className="mb-4">
          <h5 className="text-center">Monthly Demand Forecast for Products</h5>
          <Line data={forecastData} />
        </Col>
      </Row>

      {/* Bar Chart for Regional Demand */}
      <Row className="mt-5">
        <Col md={12} className="mb-4">
          <h5 className="text-center">Regional Demand Forecast</h5>
          <Bar data={regionDemandData} />
        </Col>
      </Row>

      {/* Radar Chart for Inventory Optimization */}
      <Row className="mt-5">
        <Col md={12} className="mb-4">
          <h5 className="text-center">AI Impact on Inventory Optimization</h5>
          <Radar data={radarData} />
        </Col>
      </Row>

      {/* Interactive Insights */}
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h5 className="mb-3">AI-Driven Insights</h5>
          <p>
            Based on real-time data analysis, AI predicts a 15% increase in
            demand for **Product A** in **Q3**, suggesting the need to ramp up
            production to avoid stockouts. Meanwhile, **Product B**'s demand is
            expected to peak in **Q4**, and inventory levels should be adjusted
            accordingly.
          </p>
          <p>
            In **Asia** and **Europe**, AI forecasts the highest demand growth,
            while **North America** is expected to maintain stable demand.
            Businesses should focus on ensuring supply chain readiness in these
            regions to capture the demand.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DemandForecasting;

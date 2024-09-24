import React from "react";
import { Line, Bar, Pie, Radar, PolarArea } from "react-chartjs-2";
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

const SupplyChainOptimization = () => {
  // Data for demand forecasting
  const demandForecastData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Forecasted Demand",
        data: [500, 700, 900, 1200],
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true,
      },
    ],
  };

  // Inventory optimization data
  const inventoryData = {
    labels: ["Stockouts", "Overstock", "Balanced Inventory"],
    datasets: [
      {
        label: "Inventory Status",
        data: [10, 5, 85],
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
      },
    ],
  };

  // Distribution efficiency
  const distributionData = {
    labels: ["Warehouse A", "Warehouse B", "Warehouse C"],
    datasets: [
      {
        label: "Delivery Speed (Days)",
        data: [2, 3, 1],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Supplier efficiency
  const supplierPerformanceData = {
    labels: ["Supplier 1", "Supplier 2", "Supplier 3"],
    datasets: [
      {
        label: "On-Time Deliveries",
        data: [90, 80, 70],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  // Supply chain risk factors
  const riskData = {
    labels: ["Economic", "Natural Disaster", "Supplier Issues", "Logistics"],
    datasets: [
      {
        label: "Supply Chain Risk",
        data: [30, 40, 20, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // Environmental impact data
  const environmentalImpactData = {
    labels: ["Emissions", "Energy Usage", "Waste Reduction"],
    datasets: [
      {
        label: "Environmental Factors",
        data: [60, 30, 10],
        backgroundColor: ["#66BB6A", "#FFCA28", "#29B6F6"],
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">AI-Driven Supply Chain Optimization</h2>
      <p className="text-center">
        Learn how AI can optimize each stage of the supply chain, from demand
        forecasting and inventory management to distribution, supplier
        performance, and reducing risks.
      </p>

      {/* Step 1: Demand Forecasting */}
      <Row className="mt-5">
        <Col md={6}>
          <h5 className="text-center">1. Demand Forecasting</h5>
          <p className="text-center">
            AI uses historical data to forecast product demand, enabling
            accurate planning.
          </p>
        </Col>
        <Col md={6}>
          <Line data={demandForecastData} />
        </Col>
      </Row>

      {/* Step 2: Inventory Management */}
      <Row className="mt-5">
        <Col md={6}>
          <h5 className="text-center">2. Inventory Optimization</h5>
          <p className="text-center">
            AI balances inventory levels, reducing stockouts and preventing
            overstock situations.
          </p>
        </Col>
        <Col md={6}>
          <Pie data={inventoryData} />
        </Col>
      </Row>

      {/* Step 3: Distribution Efficiency */}
      <Row className="mt-5">
        <Col md={6}>
          <h5 className="text-center">3. Distribution Efficiency</h5>
          <p className="text-center">
            AI improves distribution by analyzing delivery speed and warehouse
            performance.
          </p>
        </Col>
        <Col md={6}>
          <Bar data={distributionData} />
        </Col>
      </Row>

      {/* Step 4: Supplier Performance */}
      <Row className="mt-5">
        <Col md={6}>
          <h5 className="text-center">4. Supplier Performance</h5>
          <p className="text-center">
            AI monitors supplier performance to ensure on-time deliveries and
            quality standards.
          </p>
        </Col>
        <Col md={6}>
          <Radar data={supplierPerformanceData} />
        </Col>
      </Row>

      {/* Step 5: Supply Chain Risk Management */}
      <Row className="mt-5">
        <Col md={6}>
          <h5 className="text-center">5. Risk Management</h5>
          <p className="text-center">
            AI identifies potential risks, such as supplier delays or economic
            disruptions, helping businesses take proactive measures.
          </p>
        </Col>
        <Col md={6}>
          <PolarArea data={riskData} />
        </Col>
      </Row>

      {/* Step 6: Environmental Sustainability */}
      <Row className="mt-5">
        <Col md={6}>
          <h5 className="text-center">6. Environmental Impact</h5>
          <p className="text-center">
            AI ensures supply chain operations are environmentally friendly by
            reducing emissions and waste.
          </p>
        </Col>
        <Col md={6}>
          <Pie data={environmentalImpactData} />
        </Col>
      </Row>

      {/* AI-Driven Insights */}
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h5 className="mb-3">AI-Driven Insights</h5>
          <p>
            By optimizing demand forecasting and balancing inventory, AI enables
            efficient distribution and enhances supplier performance. AI's
            ability to predict supply chain risks and ensure sustainability
            drives efficiency, cost savings, and environmentally responsible
            operations.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SupplyChainOptimization;

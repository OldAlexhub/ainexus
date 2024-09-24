import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip
);

const LeadScoring = () => {
  const [leads, setLeads] = useState([]); // Array of leads
  const [scoreData, setScoreData] = useState([]); // Lead scores
  const [totalLeads, setTotalLeads] = useState(0); // Total number of leads processed
  const [highScoringLeads, setHighScoringLeads] = useState(0); // Leads with a score above a threshold

  // Function to generate random lead data
  const generateRandomLead = () => {
    const leadId = `L${Math.floor(Math.random() * 1000) + 1}`;
    const engagement = Math.floor(Math.random() * 100); // Engagement score out of 100
    const purchaseIntent = Math.floor(Math.random() * 100); // Purchase intent score
    const budget = Math.floor(Math.random() * 100); // Budget alignment score
    const companySize = Math.floor(Math.random() * 5000) + 100; // Company size (employees)
    const score = Math.floor((engagement + purchaseIntent + budget) / 3); // Simple average for scoring

    return {
      leadId,
      engagement,
      purchaseIntent,
      budget,
      companySize,
      score,
    };
  };

  // Function to simulate real-time lead generation
  useEffect(() => {
    const interval = setInterval(() => {
      const newLead = generateRandomLead();
      setLeads((prevLeads) => [...prevLeads, newLead]);
      setTotalLeads((prevTotal) => prevTotal + 1);
      if (newLead.score > 70) {
        setHighScoringLeads((prevCount) => prevCount + 1);
      }

      // Updating lead score data for chart
      const updatedScoreData = leads.map((lead) => lead.score);
      setScoreData(updatedScoreData);
    }, 2000); // Every 2 seconds, add a new lead

    return () => clearInterval(interval);
  }, [leads]);

  // Data for Lead Score Distribution (Bar Chart)
  const leadScoreData = {
    labels: leads.map((lead) => lead.leadId),
    datasets: [
      {
        label: "Lead Score",
        data: scoreData,
        backgroundColor: scoreData.map((score) =>
          score > 70 ? "#4BC0C0" : "#FF6384"
        ),
      },
    ],
  };

  // Data for High Scoring Leads (Pie Chart)
  const highScoreData = {
    labels: ["High Scoring Leads (>70)", "Other Leads"],
    datasets: [
      {
        data: [highScoringLeads, totalLeads - highScoringLeads],
        backgroundColor: ["#4BC0C0", "#FF6384"],
      },
    ],
  };

  // Progress Bar Data for Lead Flow
  const leadProgress = Math.floor((leads.length / 100) * 100);

  return (
    <Container className="mt-5">
      <h2 className="text-center">Live Lead Scoring Dashboard</h2>
      <p className="text-center">
        This dashboard showcases how AI-driven lead scoring can dynamically
        update with new leads. High-scoring leads are prioritized based on
        engagement, purchase intent, and budget alignment.
      </p>

      <Row className="mt-5">
        {/* Lead Scoring Distribution */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Lead Score Distribution
              </Card.Title>
              <p className="text-center">
                Monitor real-time lead scores. Leads above a score of 70 are
                high-priority.
              </p>
              <Bar data={leadScoreData} />
            </Card.Body>
          </Card>
        </Col>

        {/* High Scoring Leads Pie Chart */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                High Scoring Leads
              </Card.Title>
              <p className="text-center">
                View the proportion of high-scoring leads compared to all
                processed leads.
              </p>
              <Pie data={highScoreData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Real-Time Lead List */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Real-Time Lead Flow
              </Card.Title>
              <p className="text-center">
                Simulating live lead generation and scoring.
              </p>
              <ProgressBar
                now={leadProgress}
                label={`${leadProgress}%`}
                className="mb-4"
              />
              {leads.map((lead, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between mb-2"
                >
                  <div>
                    <strong>Lead ID: {lead.leadId}</strong> - Engagement:{" "}
                    {lead.engagement} - Purchase Intent: {lead.purchaseIntent} -
                    Budget: {lead.budget}
                  </div>
                  <Badge bg={lead.score > 70 ? "success" : "secondary"}>
                    {lead.score}
                  </Badge>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LeadScoring;

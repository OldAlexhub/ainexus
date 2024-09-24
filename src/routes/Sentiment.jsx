import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip);

const Sentiment = () => {
  const [comments, setComments] = useState([]);
  const [sentimentData, setSentimentData] = useState({
    positive: 0,
    neutral: 0,
    negative: 0,
  });
  const [totalComments, setTotalComments] = useState(0);

  // Simulate real-time customer comment data
  const generateRandomComment = () => {
    const randomComments = [
      "Great service and friendly staff!",
      "I am very disappointed with the product quality.",
      "The website is very user-friendly, I loved it!",
      "Shipping took way too long, not happy.",
      "The customer support was helpful and resolved my issue quickly.",
      "This is the worst experience I’ve had, will never return.",
      "Amazing products! Will definitely purchase again.",
      "The mobile app crashes often, please fix this!",
    ];

    const randomIndex = Math.floor(Math.random() * randomComments.length);
    return randomComments[randomIndex];
  };

  // Simulate sentiment analysis
  const analyzeSentiment = (comment) => {
    if (
      comment.toLowerCase().includes("great") ||
      comment.toLowerCase().includes("amazing") ||
      comment.toLowerCase().includes("loved") ||
      comment.toLowerCase().includes("helpful")
    ) {
      return "positive";
    } else if (
      comment.toLowerCase().includes("disappointed") ||
      comment.toLowerCase().includes("worst") ||
      comment.toLowerCase().includes("not happy")
    ) {
      return "negative";
    } else {
      return "neutral";
    }
  };

  // Simulate real-time comment feed and update sentiment analysis
  useEffect(() => {
    const interval = setInterval(() => {
      const newComment = generateRandomComment();
      const sentiment = analyzeSentiment(newComment);

      setComments((prevComments) => [
        ...prevComments,
        { comment: newComment, sentiment },
      ]);

      setTotalComments((prevTotal) => prevTotal + 1);

      setSentimentData((prevData) => ({
        ...prevData,
        [sentiment]: prevData[sentiment] + 1,
      }));
    }, 2000); // Simulate new comment every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Pie chart data for sentiment distribution
  const sentimentPieData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [
          sentimentData.positive,
          sentimentData.neutral,
          sentimentData.negative,
        ],
        backgroundColor: ["#4BC0C0", "#FFCE56", "#FF6384"],
      },
    ],
  };

  // Bar chart data for sentiment over time
  const sentimentBarData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment Analysis",
        data: [
          sentimentData.positive,
          sentimentData.neutral,
          sentimentData.negative,
        ],
        backgroundColor: ["#4BC0C0", "#FFCE56", "#FF6384"],
      },
    ],
  };

  // Progress bar for the number of comments
  const commentProgress = Math.floor((totalComments / 50) * 100);

  return (
    <Container className="mt-5">
      <h2 className="text-center">Live Customer Sentiment Analysis</h2>
      <p className="text-center">
        This live sentiment analysis dashboard showcases how customer feedback
        is processed in real-time to understand overall sentiment. Positive,
        neutral, and negative comments are analyzed and visualized to give
        insights into customer satisfaction.
      </p>

      <Row className="mt-5">
        {/* Sentiment Distribution Pie Chart */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Sentiment Distribution
              </Card.Title>
              <p className="text-center">
                Real-time sentiment analysis of customer comments.
              </p>
              <Pie data={sentimentPieData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Sentiment Bar Chart */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Sentiment Breakdown
              </Card.Title>
              <p className="text-center">
                A breakdown of positive, neutral, and negative comments.
              </p>
              <Bar data={sentimentBarData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Real-Time Comment List */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Live Customer Comments
              </Card.Title>
              <p className="text-center">
                Below are the latest comments analyzed in real-time for
                sentiment.
              </p>
              <ProgressBar
                now={commentProgress}
                label={`${commentProgress}%`}
                className="mb-4"
              />
              {comments.map((commentObj, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between mb-2"
                >
                  <div>
                    <strong>Comment {index + 1}:</strong> {commentObj.comment}
                  </div>
                  <Badge
                    bg={
                      commentObj.sentiment === "positive"
                        ? "success"
                        : commentObj.sentiment === "negative"
                        ? "danger"
                        : "warning"
                    }
                  >
                    {commentObj.sentiment.charAt(0).toUpperCase() +
                      commentObj.sentiment.slice(1)}
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

export default Sentiment;

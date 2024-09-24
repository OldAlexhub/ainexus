import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../images/logo.webp";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h1 className="display-4">Welcome to AI Nexus</h1>
          <p className="lead">
            AI Nexus is an innovative platform designed to transform how
            businesses operate internally. With the power of Artificial
            Intelligence, we streamline workflows, automate tasks, and help
            organizations unlock new levels of efficiency and productivity.
          </p>
          <Button variant="primary" href="#features">
            Learn More
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={Logo}
            alt="AI Nexus Illustration"
            className="img-fluid"
            style={{ borderRadius: "20px" }}
          />
        </Col>
      </Row>

      <Row className="text-center py-5 bg-light" id="features">
        <Col>
          <h2 className="mb-4">Key Features of AI Nexus</h2>
        </Col>
      </Row>

      <Row className="text-center">
        <Col md={4}>
          <img
            src="https://www.ascend.io/wp-content/uploads/2022/02/automation.jpg"
            alt="Automation"
            className="mb-3 img-fluid"
            style={{
              borderRadius: "20px",
              height: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <h4>Automation</h4>
          <p>
            Automate routine tasks like scheduling, reporting, and data entry,
            allowing your team to focus on higher-value work.
          </p>
        </Col>
        <Col md={4}>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQEzz_oAhPfM8Q/article-cover_image-shrink_720_1280/0/1681996893702?e=2147483647&v=beta&t=7ttgYwo12NY2fOK06m9e38Xxg68PBjcx1oNmyuu9Fpk"
            alt="Data-Driven Insights"
            className="mb-3 img-fluid"
            style={{
              borderRadius: "20px",
              height: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <h4>Data-Driven Insights</h4>
          <p>
            Utilize AI to analyze complex data sets in real-time and provide
            actionable insights that drive smarter decision-making.
          </p>
        </Col>
        <Col md={4}>
          <img
            src="https://www.notifyvisitors.com/pb/wp-content/uploads/2020/04/What-is-Workflow-optimization.jpg"
            alt="Workflow Optimization"
            className="mb-3 img-fluid"
            style={{
              borderRadius: "20px",
              height: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <h4>Workflow Optimization</h4>
          <p>
            Streamline workflows across departments for enhanced collaboration
            and improved operational efficiency.
          </p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={6}>
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg"
            alt="AI Use Case"
            className="img-fluid"
            style={{ height: "400px", width: "600px", borderRadius: "20px" }}
          />
        </Col>
        <Col md={6}>
          <h3>How AI Nexus Can Help Your Business</h3>
          <p>
            By integrating AI into everyday operations, businesses can reduce
            costs, improve accuracy, and enhance overall productivity. Whether
            it's automating repetitive tasks or providing insights through
            machine learning, AI Nexus is designed to elevate your company's
            internal workflows.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

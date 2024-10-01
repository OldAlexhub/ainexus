import { Outlet, Link } from "react-router-dom";
import Logo from "../images/logo.webp";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="AI Nexus Logo"
              style={{ borderRadius: "50%" }}
            />
            <span className="ms-2">AI Nexus</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="me-3">
                Home
              </Nav.Link>

              {/* Human Resources Dropdown */}
              <NavDropdown
                title="Human Resources"
                id="hr-dropdown"
                className="me-3"
              >
                {/* <NavDropdown.Item as={Link} to="/jobs">
                  Jobs
                </NavDropdown.Item> */}
                {/* <NavDropdown.Item as={Link} to="/handbook">
                  Employee Handbook
                </NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/employeeanalytics">
                  Employee Analytics
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/employeeadvancements">
                  Employee Advancements
                </NavDropdown.Item>
              </NavDropdown>

              {/* Finance Dropdown */}
              <NavDropdown title="Finance" id="hr-dropdown" className="me-3">
                {/* <NavDropdown.Item as={Link} to="/fraud">
                  Fraud Detection
                </NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/predictiveanalytics">
                  Predictive Analytics
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/spendinganalytics">
                  Spend Analytics
                </NavDropdown.Item>
              </NavDropdown>

              {/* Customer Service Dropdown */}
              <NavDropdown
                title="Customer Service"
                id="hr-dropdown"
                className="me-3"
              >
                <NavDropdown.Item as={Link} to="/sentiment">
                  Sentiment Analysis
                </NavDropdown.Item>
              </NavDropdown>

              {/* Sales and Marketing Dropdown */}
              <NavDropdown
                title="Sales and Marketing"
                id="hr-dropdown"
                className="me-3"
              >
                <NavDropdown.Item as={Link} to="/lead">
                  Lead Scoring
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/segement">
                  Customer Segmentation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sales">
                  Predictive Sales Analytics
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/content">
                  Content Creation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ad">
                  Ad Optimization
                </NavDropdown.Item>
              </NavDropdown>

              {/* Operations Dropdown */}
              <NavDropdown title="Operations" id="hr-dropdown" className="me-3">
                <NavDropdown.Item as={Link} to="/demand">
                  Demand Forecasting
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/supply">
                  Supply Chain Optimization
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maintenance">
                  Predictive Maintenance
                </NavDropdown.Item>
              </NavDropdown>

              {/* IT Dropdown */}
              <NavDropdown
                title="IT & Security"
                id="hr-dropdown"
                className="me-3"
              >
                <NavDropdown.Item as={Link} to="/IT">
                  Cybersecurity
                </NavDropdown.Item>
              </NavDropdown>

              {/* Legal Dropdown */}
              <NavDropdown title="Legal" id="hr-dropdown" className="me-3">
                <NavDropdown.Item as={Link} to="/review">
                  Contract Review
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/compliance">
                  Compliance Monitoring
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;

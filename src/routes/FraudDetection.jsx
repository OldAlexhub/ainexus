import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

const FraudDetection = () => {
  const [transactions, setTransactions] = useState([]); // To store transaction data
  const [fraudulentTransactions, setFraudulentTransactions] = useState([]); // To store fraudulent transactions
  const [loading, setLoading] = useState(false); // To handle loading state
  const [fraudLoading, setFraudLoading] = useState(false); // To handle fraud detection loading
  const [error, setError] = useState(null); // To handle errors

  // Fetch transactions when the component loads
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await axios.get(process.env.REACT_APP_GET_TRANSACTIONS);

      // Check if the response is an object and contains an array inside
      const transactionsData = response.data.transactions || []; // Adjust this based on how your API is structured
      setTransactions(transactionsData);
    } catch (error) {
      setError("Failed to fetch transactions");
    } finally {
      setLoading(false);
    }
  };

  // Trigger fraud detection
  const handleFraudDetection = async () => {
    try {
      setFraudLoading(true);
      const response = await axios.get(process.env.REACT_APP_GET_FRAUD_PYTHON); // Trigger Python for fraud detection

      const fraudData = response.data.data || []; // Adjust based on the structure of response
      setFraudulentTransactions(fraudData);
    } catch (error) {
      setError("Failed to detect fraud");
    } finally {
      setFraudLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      {/* Top section */}
      <Row className="mb-4">
        <Col>
          <h2>Bank Statement Overview</h2>
          <p>
            View your recent transactions and check for any fraudulent activity.
          </p>
          <Button
            variant="danger"
            onClick={handleFraudDetection}
            disabled={fraudLoading}
          >
            {fraudLoading ? (
              <Spinner animation="border" size="sm" /> // Add spinner during fraud detection
            ) : (
              "Detect Fraudulent Transactions"
            )}
          </Button>
        </Col>
      </Row>

      {/* Error Alert */}
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}

      {/* Fraudulent Transactions Section */}
      {fraudulentTransactions.length > 0 && (
        <Row className="mt-5">
          <Col>
            <h4>Fraudulent Transactions</h4>
            <Table
              striped
              bordered
              hover
              className="mt-3"
              style={{ textAlign: "center" }}
            >
              <thead className="bg-danger text-white">
                <tr>
                  <th>Date</th>
                  <th>Department</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {fraudulentTransactions.map((fraudulentTransaction, index) => (
                  <tr key={index}>
                    <td>{fraudulentTransaction.Date}</td>
                    <td>{fraudulentTransaction.Department}</td>
                    <td>{fraudulentTransaction.Amount}</td>
                    <td>{fraudulentTransaction.Description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}

      {/* Transaction Table */}
      <Row>
        <Col>
          <h4>Transaction History</h4>
          <Table
            striped
            bordered
            hover
            className="mt-3"
            style={{ textAlign: "center" }}
          >
            <thead className="bg-light">
              <tr>
                <th>Date</th>
                <th>Department</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    Loading transactions...
                  </td>
                </tr>
              ) : transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.Date}</td>
                    <td>{transaction.Department}</td>
                    <td>{transaction.Amount}</td>
                    <td>{transaction.Description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default FraudDetection;
